import axios from "axios"
import * as _ from "lodash"
import config from "../../config/"
import {wait} from "../../test/support/time"
import {inspect} from "util"
import {akQueue} from "../db/service/queues"
const {secrets, vanRsvp} = config

const LIMIT = 100

const api = () => {
  return axios.create({
    baseURL: secrets.actionKitAPI.baseUrl,
    auth: {
      username: secrets.actionKitAPI.username,
      password: secrets.actionKitAPI.password,
    },
  })
}

export const getWithRetry =  async (endpoint, retries = 5, waittime = 500, apiInstance = api()) => {
  try {
    return await apiInstance.get(endpoint)
  } catch (err) {
    if (retries > 0) {
      await wait(waittime)
      return await getWithRetry(endpoint, retries - 1, waittime * 2, apiInstance)
    } else {
      handleError(err, endpoint)
      return
    }
  }
}

const handleError = (err, resourceEndpoint) => {
  const errorTitle = `[ERROR][AK FETCH][${Date.now()}]`
  console.error(errorTitle, `Endpoint: ${resourceEndpoint}`)
  console.error(errorTitle, `Request: ${inspect(err.response.config.data)}`)
  console.error(errorTitle, `Response: ${inspect(err.response.data)}`)
}

const getResource = async (resourceUrl: string) => {
  const response = await getWithRetry(resourceUrl)
  return _.get(response, ["data"])
}

export const getResources = async (resourceUrl: string, offset: number = 0, resources = []) => {
  const paginationParams = `_limit=${LIMIT}&_offset=${offset}`
  const paramsAppender = resourceUrl.includes("?") ? "&" : "?"
  const endpoint = `${resourceUrl}${paramsAppender}${paginationParams}`

  const response = await getWithRetry(endpoint)
  const nextUrl = _.get(response, ["data", "meta", "next"])
  const totalCount = _.get(response, ["data", "meta", "total_count"])

  if (process.env.DEBUG) {
    process.stdout.write(
      "Fetched: " + (offset + LIMIT > totalCount ? totalCount : offset + LIMIT) + "/" + totalCount + "\r",
    )
  }

  const nextResources = _.get(response, ["data", "objects"])
  const acc = resources.concat(nextResources)

  if (nextUrl) {
    return getResources(resourceUrl, offset + LIMIT, acc)
  }

  return acc
}

export const getEvents = async (eventsUrl: string): Promise<ActionKitEventResponse[]> => {
  return getResources(eventsUrl)
}

export const getEventSignup = (eventSignupUrl: string): Promise<ActionKitSignupResponse> => {
  return getResource(eventSignupUrl)
}

export const getUser = (userUrl: string): Promise<ActionKitPersonResponse> => {
  return getResource(userUrl)
}

export const getPhones = async (phoneUrls: string[]): Promise<ActionKitPhone[]> => {
  return await Promise.all(phoneUrls.map(async (phoneUrl: string) => {
    return await getPhone(phoneUrl)
  }))
}

export const getPhone = async (phoneUrl: string): Promise<ActionKitPhone> => {
  return await getResource(phoneUrl)
}

export const getEventTrees = async (eventsEndpoint = secrets.actionKitAPI.eventsEndpoint): Promise<ActionKitEvent[]> => {
  console.log("Fetching events...")
  const events = await getEvents(eventsEndpoint)
  console.log("\nDone fetching events.")
  const filteredEvents = events.filter(noSyncEventFilter)
  console.log("Fetching event trees...")
  const eventTrees = await Promise.all(filteredEvents.map(async (event, index) => {
    return await akQueue.schedule(() => getEventTree(event, index, filteredEvents.length))
  }))
  console.log("\nDone fetching event trees.")
  return eventTrees
}

export const noSyncEventFilter = (event): boolean =>
  _.includes(Object.keys(vanRsvp.actionKit.whitelistMapping), event.campaign)

export const getEventTree = async (event, index, total): Promise<ActionKitEvent> => {
  if (process.env.DEBUG) {
    process.stdout.write("Fetched: " + (index + 1) + "/" + total + "\r")
  }
  const eventSignups = await Promise.all(event.signups.map(await buildSignup))
  const filteredSignups = eventSignups.filter(eventSignup => !_.isEmpty(eventSignup))
  return buildEvent(event, filteredSignups)
}

const buildSignup = async (signupUrl: string): Promise<ActionKitSignup|object> => {
  try {
    const eventSignup = await getEventSignup(signupUrl)
    const user = await getUser(eventSignup.user)
    const phones = await getPhones(user.phones)
    return { ...eventSignup, user: {...user, phones} }
  } catch (err) {
    const timestamp = Date.now()
    console.error(`[ERROR][AK BUILDSIGNUP][${timestamp}]`, inspect(err))
    console.error(`[ERROR][AK BUILDSIGNUP][${timestamp}]`, "Signup URL: ", signupUrl)
    return {}
  }
}

const buildEvent = (event, eventSignups): ActionKitEvent => ({ ...event, signups: eventSignups })
