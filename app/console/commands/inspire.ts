'use strict'

import { Command } from '@supercharge/console'

export default class Inspire extends Command {
  /**
   * Configure this command.
   */
  override configure() {
    this
      .name('inspire')
      .description('Print an inspiring quote.')
  }

  /**
   * Run the command action.
   */
  override async run () {
    console.log('Sometimes you win. Sometimes you learn.')
  }
}
