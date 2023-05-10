# Employee Record Application

This is a basic Angular application that displays a list of employee records and allows the user to search for employees by any of their attributes. The data is stored in an Angular service as a backend.

## Installation

To run the application, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` in the project directory.
3. Start the server by running `ng serve` or `npm start` in the project directory.
4. Open your web browser and navigate to `http://localhost:4200`.

Version:
npm -v
9.5.1
node -v
v18.16.0

## Usage

Once the application is running, you will see a list of employee records displayed on the screen. You can search for an employee by typing either First Name, Last name or Email into the search box located at the top of the screen. The search is case-insensitive and will match any part of the attribute.

If there are multiple employees that match the search criteria, they will all be displayed in the list. If there are no matches, a message will be displayed indicating that no employees were found.

## Employee Record Format

Each employee record has the following attributes:

- First Name
- Last Name
- Email
- Title
- Phone Number
- Address

All of these attributes are required and must be included in each employee record.

## Seed Data

The following employee records are included in the seed data:

[
    {
        "firstName": "Rahul",
        "lastName": "Sharma",
        "email": "rahul.sharma@example.com",
        "title": "Software Engineer",
        "phoneNumber": "+91 9876543210",
        "address": "123 St, Anytown, India"
    },
    {
        "firstName": "Priya",
        "lastName": "Kumar",
        "email": "priya.kumar@example.com",
        "title": "Web Developer",
        "phoneNumber": "+91 9876543220",
        "address": "456 St, Anytown, India"
    },
    {
        "firstName": "Amit",
        "lastName": "Patel",
        "email": "amit.patel@example.com",
        "title": "Product Manager",
        "phoneNumber": "+91 9876543230",
        "address": "789 St, Anytown, India"
    },
    {
        "firstName": "Sneha",
        "lastName": "Singh",
        "email": "sneha.singh@example.com",
        "title": "UX Designer",
        "phoneNumber": "+91 9876543240",
        "address": "246 St, Anytown, India"
    },
    {
        "firstName": "Raj",
        "lastName": "Gupta",
        "email": "raj.gupta@example.com",
        "title": "Marketing Manager",
        "phoneNumber": "+91 9876543250",
        "address": "369 St, Anytown, India"
    },
    {
        "firstName": "Anjali",
        "lastName": "Nair",
        "email": "anjali.nair@example.com",
        "title": "Software Engineer",
        "phoneNumber": "+91 9876543260",
        "address": "135 St, Anytown, India"
    },
    {
        "firstName": "Priya",
        "lastName": "Singh",
        "email": "priya.singh@example.com",
        "title": "UI/UX Developer",
        "phoneNumber": "+91 9876543270",
        "address": "899 St, Anytown, India"
    }
]
