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
const SCHEMA = {
	[Type.Gist]: {
		name: "id",
		files: "files"
	},
	[Type.Repo]: {
		url: "ssh_url",
		name: "name"
	}
};
const API = {
	HOST: "api.github.com",
	[Type.Gist]: "/gists",
	[Type.Repo]: "/user/repos"
};

(async function main(...args: string[]): Promise<void> {
	const parameters = parseParameters(...args);
	const options = {...DEFAULT_OPTIONS, ...parseOptions(...args)};
	const cwd = process.cwd();
	// TODO
	switch (parameters.type) {
		case Type.Gist: {
			break;
		}
		case Type.Repo: {
			break;
		}
	}
})(...process.argv.slice(2));

// TODO: WARN: Unknown option
function parseOptions(...args: string[]): Options {
	return Object.fromEntries(
		args
			.filter(arg => arg.startsWith("-"))
			.map(arg => arg.replace(/^-+/, ""))
			.map(arg => arg.split("="))
			.map(arg => arg[1] ? arg : [arg[0], true])
	);
}

function parseParameters(...args: string[]): Parameters {
	const [type, user, auth] = args;
	const lcType = Object.fromEntries(Object.entries(Type).map(entry => entry.map(item => item.toString().toLowerCase())));
	if (!(type in lcType))
		throw new Error(`Unknown type: ${type}`);
	if (!user)
		throw new Error("User name is not provided");
	if (!auth)
		throw new Error("Auth token is not provided");
	return {
		type: +lcType[type],
		user,
		auth
	};
}

type Parameters = {
	type: Type;
	user: string;
	auth: string;
}

type Options = {
	"dry-run": boolean;
	"plain": boolean;
	"verbose": boolean;
}