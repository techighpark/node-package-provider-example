#!/usr/bin/env node

const greeting = require('./index')
console.log('process.argv[2]: ', process.argv[2])
console.log('greeting[process.argv[2]]: ', greeting[process.argv[2]])