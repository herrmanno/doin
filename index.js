#!/usr/bin/env node

const { exec } = require("child_process")


const [
	nodePath,
	executablePath,
	time, 
	...cmds
] = process.argv

const usage = () => {
	const name = executablePath.split(/[/\\]/).slice(-1)[0]
	console.log([
		"Usage:",
		`  ${name} <time> <command>`,
		"",
		"  where time has the format ([0-9]+[hHmMsS])+"
	].join("\n"))
	process.exit(1)
}

if(process.argv.length < 3) {
	usage()
}

if(!/^(\d+[hHmMsS])+$/.test(time)) {
	usage()
}

const seconds = (time.match(/(\d+)[sS]/) || [, 0])[1]
const minutes = (time.match(/(\d+)[mM]/) || [, 0])[1]
const hours = (time.match(/(\d+)[hH]/) || [, 0])[1]
const timeInMillis =
	1000 * seconds +
	1000 * 60 * minutes +
	1000 * 60 * 60 * hours

setTimeout(() => {
	process.exit( exec(cmds.join(" ")) )
}, timeInMillis)