# Script that exports all GitHub user repositories and gists
Exports all GitHub repositories and gists that user have to the current directory.

## Usage
```
npm run build
node index.js <type> <user> <auth> [--dry-run] [--plain] [--verbose]
```
Where:
- `<type>` - Type of data to sync. Either "gist" or "repo"
- `<user>` - GitHub user name
- `<auth>` - GitHub personal access token
- `--dry-run` - Do nothing, only show what would be done
- `--plain` - Place all files in a single directory rather than in individual directories. Only for "gist" type
- `--verbose` - Enable verbose output

*Example*:
```
node index.js repo stein197 ghp_IqIMNOZH6z0wIEB4T9A2g4EHMy8Ji42q4HA5 --verbose
```

This will create two folders in the current directory: Gists and Projects.

## NPM scripts
- `build` builds the project
