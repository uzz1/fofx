# Fofx Assessment

## Project Description

Stock and stock-value tables with multi-role based authentication. A person is able to register and login to the app as a user in order to view the stocks page. 

A person can login as an administrator, using the correct admin credential. Administrators have access to the stocks page and also a user list page, where they can view, edit or delete existing users.

The stocks page consists of 2 tables, stocks and stock values. The user selects a stock from the stock table to display the corresponding values in the stock-values table. The user is then able to export and download the stock-values data in json format. 


## Technology Stack

React in Typescript for the frontend
NodeJS for the backend
MongoDB cloud database


# Instructions
Follow these steps to run the app on your local machine

## Installation

Assume you have node installed

Clone the repository:
### `git clone https://github.com/uzz1/fofx.git`

From the root directory of project:

Navigate to the frontend directory and run:
### `npm install`

Navigate to the backend directory and run:
### `npm install`


## Run the App


To start the development servers simultaneously for both backend and frontend:

Navigate to the backend directory and run:
### `npm run dev`


## OR

Run frontend and backend separately:

Navigate to the frontend directory and run:
### `npm start`

Navigate to the backend directory and run:
### `npm run server`


