# CURD - MERN Stack Application

This is a simple CRUD (Create, Read, Update, Delete) application built using MongoDB, Express.js, React.js, and Node.js (MERN Stack).

## Live Preview

You can check out the live version of the app [here](https://curd-mern-app-frontend.vercel.app/) (replace with your actual live preview link).

## Getting Started

To get started read the instructions below carefully.

### Prerequisites

- Node.js
- MongoDB
- npm

### Installation

1. Clone the repo
```bash
git clone https://github.com/your_username_/Project-Name.git
```

### Install NPM packages

```bash 
npm install
```

### Setup your database

You can setup the database by getting URL from your mongodb atlas account or also you can use your compass if you have installed locally.
- copy MONGODB URL
- Create `.env` file and paste your url into a env-variable i.e. `MONGO_URL = "YOUR URL"`
- Also, create a env-variable for `PORT` i.e. `PORT = "3000"`.

### Start server

```bash
npm start
```

### Setup frontend
You are suppose to change the baseURL with your desired url in `url.js` file and you are done.

## Note
Make sure to run npm commands into specific directories, for example if you want to work with backend file then first open terminal and then change the directory first i.e. `cd .\backend\` and now run npm command to install npm packages and do same for frontend.

## Contributions 😍
As usual, contributions are always welcome, if you have any feature then fell free contribute it.

Happy coding 🚀