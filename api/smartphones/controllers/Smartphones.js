'use strict';

/**
 * Smartphones.js controller
 *
 * @description: A set of functions called "actions" for managing `Smartphones`.
 */

module.exports = {

  /**
   * Retrieve smartphones records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.smartphones.search(ctx.query);
    } else {
      return strapi.services.smartphones.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a smartphones record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.smartphones.fetch(ctx.params);
  },

  /**
   * Count smartphones records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.smartphones.count(ctx.query);
  },

  /**
   * Create a/an smartphones record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.smartphones.add(ctx.request.body);
  },

  /**
   * Update a/an smartphones record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.smartphones.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an smartphones record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.smartphones.remove(ctx.params);
  }
};
