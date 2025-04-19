# Getting Started

Welcome to the Airport project.

It contains these folders and files, following CAP recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | domain models and data go here
`srv/` | service models and code go here
`package.json` | project metadata and configuration
`readme.md` | getting started guide

## Prerequisites
1. **@sap/cds** (CAP CLI)  
   - Required to develop and run CAP applications.
   - Install globally using:
     ```sh
     npm install -g @sap/cds
     ```
   - Verify installation:
     ```sh
     cds -v
     ```
2. **Node.js** (version 16 or higher)  
   - Required to run the CAP project.
   - Download and install from [Node.js official website](https://nodejs.org/).
   - Verify installation:
     ```sh
     node -v
     ```
3. **SAP Fiori Tools**
    - Install the **SAP Fiori Tools - Extension Pack** from IDE Extensions
4. **SQLite** (for local database persistence)  
   - Used as the database for development.

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
or

```sh
npm start
```



## Test

Run enclosed unit tests with:

```sh
npm test
```