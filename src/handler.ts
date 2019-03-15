'use strict'

const models = require('../models')

export const hello = async (event: object, context: object, callback: Function) => {
  let users: object[] = null

  try {
    users = await models.User.findAll()
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message
    }
  }

  const response: object = {
    statusCode: 200,
    body: JSON.stringify({
      users: users
    })
  }

  return response
}
