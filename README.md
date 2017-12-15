# Mashery Toolbelt

CLI tool for Mashery API Management provisioning.


## Functionality

- Provide various commands to run complex scenarios in Mashery
- App data are stored in `HOMEDIR/.mashery-toolbelt/` directory
  - osx: `/Users/[HOME]/.mashery-toolbelt/`
  - linux: `/home/[HOME]/.mashery-toolbelt/`
  - windows: `C:\Users\[USERNAME]\.mashery-toolbelt\`


## Commands

run `mashery-toolbelt` or `mashery-toolbelt -h` to get actual list of commands


### #auth

```
mashery-toolbelt auth
```

- runs interactive wizard to enter credentials
- credentials except password are stored in `credentials.json`
- Need to run just for first time. Then it can handle refresh tokens itself
  - Rerun only on serious issues


### #ls

```
mashery-toolbelt ls [name]
```

- list all services
- optional argument `name` to filter services by name


### #backup

```
mashery-toolbelt backup <serviceId> [backupName]
```

- download snapshot of service current state into `[MASHERY_DIR]/backup/[serviceId]/[backupName].json`
- when no `backupName` is given, then current timestamp is used


### #restore

```
mashery-toolbelt restore <serviceId> <backupName>
```

- Restore service to state from given snapshot in `[MASHERY_DIR]/backup/[serviceId]/[backupName].json`


### #promote

**Adidas specific feature**


```
mashery-toolbelt promote <serviceId> <environment> <backendDomain>
```

- Clone given service to new environment following specific rules
- Available environments are DEV, QA, SIT, PRD

Example with promoting existing DEV service:

```
mashery-toolbelt promote 8t7a4qwh2dgk97tjmjxffthd QA qa.backend.domain.com
```

1. It replaces `DEV some name` before name of service and endpoint with `QA some name`
2. It replaces beginning of public domain `dev.` with `qa.`
3. It sets backend domain (systemDomain) with given argument value
4. When environment is SIT, then ensure that backend path (outboundRequestTargetPath) starts with `sit/`
  - For other environments remove that prefix


### #errorset <subcommand>

### #add

```
mashery-toolbelt errorset add <serviceId> <errorSetPath>
```

- Add given errorSet to service


## Installation

With Node.js v7.5.0 or higher installed, run

```
$ npm install -g mashery-toolbelt
```


## Development

```
$ git clone https://github.com/adidas-group/mashery-toolbelt.git
$ cd mashery-toolbelt
$ npm install
```


## TODO

- [ ] Listing of backups
  - `mashery-toolbelt snapshots` to list all list all
  - When restoring by `serviceId` without `backupName`, then give user UI to choose one
- [ ] Add stats for restoring of service like: `endpoints(created:2, updated:1, deleted:3)`
