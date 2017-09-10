#!/usr/bin/env node

'use strict'

var minimist = require('minimist')
var kapitalisasiJudul = require('.')

var argv = minimist(process.argv.slice(2))
var options = argv['i'];

argv._.forEach(function (arg) {
  console.log(kapitalisasiJudul(arg, options))
})