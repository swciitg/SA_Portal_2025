'use strict';

/**
 * hmc-member service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hmc-member.hmc-member');
