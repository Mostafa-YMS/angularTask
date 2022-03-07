# AngularTask

## Description:

Users admin dashboard.

## Function:

- Login
- Register

The authenticated site admin can:

1. List users
2. Delete user
3. Update user

## Components:

### 1. Navbar:

Navbar contains register, log in for the unauthenticated user, log out, and users for the authenticated user.

### 2. Login:

Login with email and password, after successful login, redirect to the users' page.

### 3. Register:

Register with email and password, after successful login redirects to the login page.

### 4. users:

contain all users' cards, redirect to a single user on clicking the user's card.

### 5. Single user:

contain single user card.

### 6. Remove user:

Return delete button that removes the currently viewed user, after prompting the user for confirmation.

### 7. Update user:

Contain a form for updating the user name and job.

## Guards:

### 1. auth:

Prevent unauthorized users from viewing or editing users.

### 2. login:

Prevent already authorized users from visiting login or register pages.

## Users service:

Provide the components with the needed APIs for the various functions.

## Installation and running:

After cloning run:

`npm install`

then

`ng serve`

And `ng test` for testing.

use for login :

Email: eve.holt@reqres.in

Password: cityslicka

`NOTE`: open in disabled security browser
