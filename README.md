# Memory Palace Flashcards App

A React application for flashcards using memory palace techniques

## Intro

This React application allows users to create and study flashcards with memory palace techniques <a href="https://en.wikipedia.org/wiki/Method_of_loci">(memory palace overview)</a>. The idea is to associate the items being learnt with a mnemonic device, and aphysical location that the user knows well. Users create flippable flashcards that they can cycle through.

## Technologies Used

React, Redux, Firebase

## How the Application works

Users log in using Facebook (accomplished through using Firebase's authentication), and they are presented with a slider containing all of their previously created flashcards that are stored in the firebase database. On the left is a section to create a new flashcard that takes a Question, Answer, Mnemonic Device, and image input, and will create each flashcard with the image on one side, and the remaining information on the other. The flashcards are persisted in the firebase database, and are flippable via CSS animations.

## Images

![screen shot 2017-02-14 at 5 32 14 pm](https://cloud.githubusercontent.com/assets/19242172/22955851/c1de440a-f2db-11e6-8dfc-9eaa4b313016.png)

## Build Setup

### Install dependencies
npm install

### Start Dev Server
npm start

### Run Tests
npm test

### Build for Production
npm run build

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
