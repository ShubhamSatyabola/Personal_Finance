# Personal Finance

## Description

This repository contain frontend for a personal finance app using react and redux . json - server is used as backend purpose.



## Features

- **Login**
-  Registered User can log in through this afterwhich user get authenticated . 
- **Dashboard:**
-  Dashboard is a simple representation of various elements like ,  Balance , Income , Expenses which eventually get updated on state update.
- Dashboard also has a chart representation of data ,
- It has a feature to add transactions
- Each transaction get eventually listed to a list of transaction which is sorted by date

  ## Folder Structure

- src/features : it contains features like auth or dashbord apis , slices using redux as a state management
- src/pages : includes pages for lcombining components


## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShubhamSatyabola/Personal_Finance.git

2. **Install dependencies:**

   ```bash
   npm i

3. **start the server:**

   ```bash
   npx json-server --watch data.json --port 8000
4. **start the App:**

   ```bash
   npm start

## Contributors

Shubham Satyabola
