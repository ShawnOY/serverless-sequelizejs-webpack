'use strict'

import models from '../models'

export const hello = async (event, context, callback) => {
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
