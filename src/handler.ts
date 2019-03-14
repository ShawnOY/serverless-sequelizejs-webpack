'use strict'

const models = require('../models')

export const hello = async (event: object, context: object, callback: Function) => {
  let users: object[] = null

  try {
    users = await models.User.findAll()
    console.log(users)
  } catch (error) {
    console.log(error.message)
  }

  const response: object = {
    statusCode: 200,
    body: JSON.stringify({
      users: users
    })
  }

  return response
}
