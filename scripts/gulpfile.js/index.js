// dependencies
const requireDir = require('require-dir');

// set environment
global.env = process.env.NODE_ENV || 'development';

// load tasks
requireDir('./tasks');
