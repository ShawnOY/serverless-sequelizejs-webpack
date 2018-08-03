'use strict'

const models = require('./models')

module.exports.hello = async (event, context, callback) => {
  let users = null

  try {
    users = await models.User.findAll()
  } catch (err) {

  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      users: users
    })
  }

  return response
}
