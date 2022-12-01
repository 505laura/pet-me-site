# project-2

## Installation
```md
mysql login with prompt "mysql -u root -p" then prompt mysql password
create database with prompt "source db/schema.sql"
exit from mysql with prompt "exit;"
install project dependencies with prompt "npm install"
create sample data in database with promp "npm run seed"
run project with prompt "npm start"
```

## Web routes
```md
homepage => http://localhost:3001/
user login => http://localhost:3001/login
```

## Portal routes
```md
homepage => http://localhost:3001/portal
sample login email and password =>  "email": "staff1@hotmail.com", "password": "password12345"
login => http://localhost:3001/portal/login
employee operations (when logged in) => http://localhost:3001/portal/employees
```

## Acceptance Criteria

GIVEN  a Pet adoption website 
WHEN I visit the site for the first time 
THEN I am presented with the homepage, which includes available pets if any have been posted; navigation links for the homepage and navigation bar; and the option to log in
WHEN I click on the homepage option 
THEN I am taken to the homepage
WHEN I click on "LOGIN" or "SIGN UP" in the navigation 
THEN I am prompted to either sign up or sign up
WHEN I choose to sign up 
THEN I am prompted to create a username and password
WHEN I click on the sign-up button 
THEN my user credentials are saved and I am logged into the site
WHEN I am signed in to the site 
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation 
THEN I am taken to the homepage and presented with existing  posts that include the post title, images.
WHEN I click on to one of the other option from navigation bar "PETS", "GOOD READS" or "ABOUT US" 
THEN I am redirected to the regarded page with its contents
WHEN I click on an available pet post 
THEN I am redirected to the individual pet page with pet's information
