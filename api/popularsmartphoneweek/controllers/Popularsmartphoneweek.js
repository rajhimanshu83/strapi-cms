'use strict';

/**
 * Popularsmartphoneweek.js controller
 *
 * @description: A set of functions called "actions" for managing `Popularsmartphoneweek`.
 */

module.exports = {

  /**
   * Retrieve popularsmartphoneweek records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.popularsmartphoneweek.search(ctx.query);
    } else {
      return strapi.services.popularsmartphoneweek.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a popularsmartphoneweek record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.popularsmartphoneweek.fetch(ctx.params);
  },

  /**
   * Count popularsmartphoneweek records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.popularsmartphoneweek.count(ctx.query);
  },

  /**
   * Create a/an popularsmartphoneweek record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.popularsmartphoneweek.add(ctx.request.body);
  },

  /**
   * Update a/an popularsmartphoneweek record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.popularsmartphoneweek.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an popularsmartphoneweek record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.popularsmartphoneweek.remove(ctx.params);
  }
};
