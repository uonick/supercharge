'use strict'

const BaseTest = util('base-test')
const Winston = require('winston')
const ConsoleLogger = util('logging/console-logger')

class ConsoleLoggerTest extends BaseTest {
  async colorForLevel (t) {
    const logger = new ConsoleLogger()
    t.truthy(logger.getColorForLevel('info'))
  }

  async fallbackColorForLevel (t) {
    const logger = new ConsoleLogger()
    t.truthy(logger.getColorForLevel('unavailable-level'))
  }

  async customFormat (t) {
    const logger = new ConsoleLogger()
    t.true(logger.format({ level: 'debug', message: 'testing' }).includes('debug'))
    t.true(logger.format({ level: 'debug', message: 'testing' }).includes('testing'))
  }

  async serialCustomFormatFromLogger (t) {
    const consoleLogger = new ConsoleLogger()
    const stub = this.stub(consoleLogger, 'format').returns('')

    const logger = Winston.createLogger()
    logger.add(consoleLogger.logger())
    logger.info('testing')

    this.sinon().assert.called(stub)
    stub.restore()

    t.pass()
  }
}

module.exports = new ConsoleLoggerTest()
