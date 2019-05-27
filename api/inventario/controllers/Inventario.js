'use strict';

/**
 * Inventario.js controller
 *
 * @description: A set of functions called "actions" for managing `Inventario`.
 */

module.exports = {

  /**
   * Retrieve inventario records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.inventario.search(ctx.query);
    } else {
      return strapi.services.inventario.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a inventario record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.inventario.fetch(ctx.params);
  },

  /**
   * Count inventario records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.inventario.count(ctx.query);
  },

  /**
   * Create a/an inventario record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.inventario.add(ctx.request.body);
  },

  /**
   * Update a/an inventario record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.inventario.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an inventario record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.inventario.remove(ctx.params);
  }
};
