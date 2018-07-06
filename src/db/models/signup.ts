import * as Bluebird from "bluebird"
import {DataTypes, Instance, Models, Sequelize, SequelizeStaticAndInstance} from "sequelize"
import {AbstractAttributes} from "../../types/Attributes"
import {VanSignup} from "../../types/VanSignup"
import {EventAttributes, EventInstance} from "./event"
import {LocationInstance} from "./location"
import {PersonInstance} from "./person"
import {ShiftInstance} from "./shift"
type Model = SequelizeStaticAndInstance["Model"]
import * as vanApi from "../../api/vanApi"
import {fromPairs} from "lodash"

export interface SignupAttributes extends AbstractAttributes, VanSignup {
  personId: number,
  eventId: number,
  vanEventId: number,
  shiftId: number,
  vanShiftId: number,
  roleId: number,
  vanRoleId: number,
  locationId: number
}

export interface SignupInstance extends Instance<SignupAttributes>, SignupAttributes {
  getEvent(): Bluebird<EventInstance>
  getLocation(): Bluebird<LocationInstance>
  getShift(): Bluebird<ShiftInstance>
  getPerson(): Bluebird<PersonInstance>
}

export const signupFactory = (s: Sequelize, t: DataTypes): Model => {

  const signup = s.define<SignupInstance, SignupAttributes>("signup", {
    actionKitId: t.INTEGER,
    eventSignupId: t.INTEGER,
    status: t.JSON,
    personId: t.INTEGER,
    eventId: t.INTEGER,
    vanEventId: t.INTEGER,
    shiftId: t.INTEGER,
    vanShiftId: t.INTEGER,
    role: t.JSON,
    locationId: t.INTEGER,
  }, {
    hooks: {
      afterCreate: postNewSignupToVan,
    },
  })

  signup.associate = (db: Models) => {
    signup.belongsTo(db.event)
    signup.belongsTo(db.location)
    signup.belongsTo(db.shift)
    signup.belongsTo(db.person)
  }

  return signup
}

const postNewSignupToVan = (signup: SignupInstance, options: object): Promise<any> =>
  Promise.all([
    postNewEventToVan(signup),
    postNewPersonToVan(signup),
    postNewShiftToVan(signup),
    postNewLocationToVan(signup),
  ])
    .then(fromPairs)
    .then(childIds => vanApi.createSignup({...signup.get(), ...childIds}))
    .then(({eventSignupId}) => signup.update({eventSignupId}))

// TODO (aguestuser|05 Jul 2018): boy could this be dried up, hunh?

const postNewEventToVan = async (signup: SignupInstance): Promise<[string, number]> => {
  const {eventId} = await vanApi.createEvent(signup.event)
  await signup.getEvent().then(x => x.update({eventId}))
  return ["eventId", eventId]
}

const postNewPersonToVan = async (signup: SignupInstance): Promise<[string, number]> => {
  const {vanId} = await vanApi.createPerson(signup.person)
  await signup.getPerson().then(x => x.update({vanId}))
  return ["vanId", vanId]
}

const postNewShiftToVan = async (signup: SignupInstance): Promise<[string, number]> => {
  const shift = await signup.getShift()
  const {eventShiftId} = await vanApi.createShift(shift.get())
  await shift.update({eventShiftId})
  return ["eventShiftId", eventShiftId]
}

const postNewLocationToVan = async (signup: SignupInstance): Promise<[string, number]> => {
  const location = await signup.getLocation()
  const {locationId} = await vanApi.createLocation(location.get())
  await location.update({locationId})
  return ["locationId", locationId]
}
