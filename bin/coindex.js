#!/usr/bin/env node

const program = require('commander');
// import { Command } from 'commander';
// const program = new Command();
const pkg = require('../package.json');
// import pkg from "../package.json" assert {type: `json`};
// const pkg = new pakg();
program
    .version(pkg.version)
    .command('key','Manage API Key -- https:nomics.com')
    .command('check','Check Coin Price Info')
    .parse(process.argv);

console.log("Hello from coindex");
// console.log(process.argv);
