'use strict';

/**
 * client-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-user.client-user');
