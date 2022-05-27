import child_process from "child_process";
import fs from "fs";
import https from "https";
import os from "os";
import path from "path";
import process from "process";

enum Type {
	Gist,
	Repo
}

const DEFAULT_OPTIONS: Options = {
	"dry-run": false,
	"plain":   false,
	"verbose": false,
};
const DEFAULT_USER_AGENT = `Node.js/${process.version.slice(1)} (${os.platform()} ${os.release()}; ${process.arch})`;
const API_HOST           = "api.github.com";
const API_USER_REPOS     = "/user/repos";
const API_GISTS          = "/gists";
const Schema = {
	[Type.Gist]: {
		name: "id",
		files: "files"
	},
	[Type.Repo]: {
		url: "ssh_url",
		name: "name"
	}
};

(async function main(...args: string[]): Promise<void> {
	const options = {...DEFAULT_OPTIONS, ...parseOptions(...args)};
})(...process.argv.slice(2));

function parseOptions(...args: string[]): Options {
	return Object.fromEntries(
		args
			.filter(arg => arg.startsWith("-"))
			.map(arg => arg.replace(/^-+/, ""))
			.map(arg => arg.split("="))
			.map(arg => arg[1] ? arg : [arg[0], true])
	);
}

type Options = {
	"dry-run": boolean;
	"plain": boolean;
	"verbose": boolean;
}