# Frontend Code Project

This is a front-end web app built in React that displays a list of job postings fetched from a remote endpoint ("https://run.mocky.io/v3/3cbadbe0-009c-4239-ac4f-e52068d2cd48").

## Overview

Fetches job postings data from the remote endpoint.
Displays job postings in card format.
Implements a loading state.
Provides (extremely) basic error handling for data retrieval failures.
Implements hover animation effect on job posting cards.

## Dependencies

Node.js and npm must be installed.

Installing github repo and running project:

`git clone https://github.com/*INSERT LINK HERE*`

`cd red-balloon-demo`

`npm install`

`npm start`


The app will now be accessible in a browser at http://localhost:3000.

## Usage

Upon launching the app, it will display a loading state (displaying "Loading...") while fetching job postings data. Once the data is fetched, job postings will be displayed as a central column of cards. The cards will display a `transform` effect if the mouse is hovered over a card.

If there is an issue with data retrieval, the error will be printed to the console.
