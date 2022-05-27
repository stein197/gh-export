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
	"plain":   false,
	"verbose": false,
	"dry-run": false,
};
const DEFAULT_USER_AGENT = `Node.js/${process.version.slice(1)} (${os.platform()} ${os.release()}; ${process.arch})`;
const API_HOST           = "api.github.com";
const API_USER_REPOS     = "/user/repos";
const API_GISTS          = "/gists";
const Schema = {
	Gist: {
		name: "id",
		files: "files"
	},
	Repo: {
		url: "ssh_url",
		name: "name"
	}
};

(async function main(...args: string[]): Promise<void> {

})(...process.argv.slice(2));

type Options = {
	"plain": boolean;
	"verbose": boolean;
	"dry-run": boolean;
}