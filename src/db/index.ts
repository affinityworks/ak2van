"use strict"

import * as SequelizeClass from "sequelize"
import {Sequelize, SequelizeStaticAndInstance, SequelizeStatic, Models} from "sequelize"
import {values, forEach} from "lodash"
import {db as config} from "../../config/index"
import {eventFactory} from "./models/event"
import {locationFactory} from "./models/location"
import {personFactory} from "./models/person"
import {shiftFactory} from "./models/shift"
import {signupFactory} from "./models/signup"

type Model = SequelizeStaticAndInstance["Model"]

export interface Database {
  sequelize: Sequelize,
  StaticSequelize: SequelizeStatic,
  event: Model,
  location: Model,
  person: Model,
  shift: Model,
  signup: Model,
}

export const initDb = (): Database => {
  const sequelize = config.use_env_variable
    ? new SequelizeClass(process.env[config.use_env_variable], config)
    : new SequelizeClass(config.database, config.username, config.password, config)

  const db = {
    event: eventFactory(sequelize, SequelizeClass),
    location: locationFactory(sequelize, SequelizeClass),
    person: personFactory(sequelize, SequelizeClass),
    shift: shiftFactory(sequelize, SequelizeClass),
    signup: signupFactory(sequelize, SequelizeClass),
  }

  forEach(values(db), (mdl: Model) => mdl.associate && mdl.associate(db))

  return {...db, sequelize, StaticSequelize: SequelizeClass }
}

export default initDb()
