'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Country {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response}, next) {
    const Country = request.only('country')
    if (Country['country']!='MX'){
      return response.notAcceptable({message:'Unauthorized'})
    }
    await next()
  }
}

module.exports = Country
