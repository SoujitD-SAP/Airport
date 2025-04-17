# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | domain models and data go here
`srv/` | service models and code go here
`package.json` | project metadata and configuration
`readme.md` | getting started guide

## Setup

Clone the repository and install dependencies:

```sh
git clone https://github.com/SoujitD-SAP/Airport.git
cd Airport
```

```sh
npm install
```

Deploy data to sqlite db for persistence 

```sh
cds deploy --to sqlite:airportdb.db
```

## Run

Run the application locally:

```sh
cds watch
```

## Test

Run enclosed tests with:

```sh
npm test
```