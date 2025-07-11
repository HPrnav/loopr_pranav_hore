# Translytics Dashboard

A modern, full-stack dashboard for visualizing, analyzing, and tracing company transactions.  
Built with React (Vite), Chart.js, Node.js/Express,typescript and a JSON/mock backend.

---
## 🚀 Hosted Link
- backend link  :https://loopr-pranav-hore.onrender.com
- frontend link :https://loopr-pranav-f.onrender.com/

## 🚀 Run locally
- clone the repo, there will be two folder 1. frontend 2.ts-backend-app
- locate to frontend and run "npm i" ->"npm run dev"
- locate to backend and run "npm i" -> "npm run start"

## 🚀endpoints
-  [POST] backendUrl/api/auth/signup  - used to create a new accoutn. user need to pass username , passowrd, firstname and last name and in return a jwt string will be returned . If user is already regestered system will throw error else new user will be created.

-  [POST] backendUrl/api/auth/signin - endpoint used to login for existing user . user need to pass username and password in body if user is valid it stores a JWT string in local storage and redirect user to dashboard.

- [GET] backendurl/api/transactions - this end point will give you all the transactions from backend and user can apply filter to sort the data according to specific atribute .eg sortBy: 'amount'.

## 🚀 Features

- **User Authentication:** Signup and Signin pages.
- **Dashboard Analytics:**  
  - Pie chart: Paid vs Pending transactions  
  - Line chart: Transaction amount per day  
  - Bar chart: Amount per category  
  - Clustered bar: Paid vs Pending per user  
  - Recent transactions table
- **Transactions Table:**  
  - Search, sort, and pagination (50/100/all)  
  - CSV export  
  - Category, status, and user profile display
- **Responsive UI:** Dark theme, mobile-friendly.
- **Configurable Backend URL:** via `.env` file.
---


