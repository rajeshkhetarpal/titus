'use strict'

const Fastify = require('fastify')

const config = require('../config/default')

// const graphqlSchema = require('./graphql').schema
// const loaders = require('./graphql').loaders
// const pgPlugin = require('./pg-plugin')

const helloRoute = require('./routes/hello')

const server = Fastify({
  logger: config.logger.pino
})

const init = async () => {
  // Run the server!
  try {
    server.register(helloRoute).after(() => {
      console.log('Registered')
    })

    await server.ready()
    await server.listen(config.fastify.port, config.fastify.host)

    server.log.info(`Server started at ${config.fastify.host}:${config.fastify.port}`)
  } catch (err) {
    server.log.error(err)

    process.exit(1)
  }
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

// process.on('SIGINT', () => {
//   // TODO graceful server stop with kill on timeout (10s)
// })

module.exports = init
