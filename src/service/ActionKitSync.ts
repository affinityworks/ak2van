import {getResources, actionKitSubject} from "./ActionKitAPI"

export const sync = () => {
  actionKitSubject.subscribe(resourceSubscriber())

  getResources()
}

export const resourceSubscriber = () => {
  return {
    next: (resourceTree) => {
      console.log("INCOMING: ", JSON.stringify(resourceTree, null, 4))
      saveResourceTree(resourceTree)
    },
    error: (err) => console.log(err),
    done: () => console.log("Done!"),
  }
}

export const saveResourceTree = (resourceTree) => {
  // TODO: write save/create to TypeORM here with nested attributes
}

// sync()
