const { createLogger, format, transports} = require('winston')

const logger = createLogger({
    transports: [new transports.Console({})]
})

logger.info('System launch')