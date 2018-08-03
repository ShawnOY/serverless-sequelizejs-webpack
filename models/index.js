const Sequelize = require('sequelize')
const config = require('../config/config')

const env = process.env.NODE_ENV || 'development'
const _config = config[env]

let models = {};

(function (config) {
  if (Object.keys(models).length) {
    return models
  }

  const sequelize = new Sequelize(config.byteTestDb, config.byteTestUser, config.byteTestPwd, config)

  let modules = [
    require('./user.js')
  ]

  modules.forEach((module) => {
    const model = module(sequelize, Sequelize, config)
    models[model.name] = model
  })

  Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
      models[key].associate(models)
    }
  })

  models.sequelize = sequelize
  models.Sequelize = Sequelize

  return models
})(_config)

module.exports = models
