'use strict'

const { REST, Routes } = require('discord.js')
const { clientId, guildId, token } = require('./config.json')

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
]

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    )
    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    )

    console.log(`Successfully reloaded ${data.length} application (/)`)
  } catch (error) {
    console.error(error)
  }
})()

module.exports.hello = async (event) => {


  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
