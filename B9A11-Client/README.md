# JobHunt Website

Welcome to JobHunt, a comprehensive platform for job seekers and employers to connect. This README provides an overview of the website's features, structure, and instructions for setup.

## Live Site URL
[JobHunt.com](https://jobhunt-c75ba.web.app/)

## Table of Contents
- [Features](#features)
- [Pages](#pages)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

1. **Navbar and Footer**:
    - Navbar includes website logo, name, and navigation links.
    - Footer includes website logo, name, copyright information, contact info, social media links, and address.
    - Navbar and footer are present on all pages except the 404 page.

2. **Authentication**:
    - Login and Registration system with email/password and Google Sign-in.
    - Relevant error messages on login and registration forms.
    - Conditional rendering of navbar items based on login status.

3. **Home Page**:
    - Banner section with a heading title and short description.
    - Job by Category section with a tab system showing different job types.
    - Extra sections for additional relevant content.

4. **Job Management**:
    - Add a Job page for logged-in users to post new job listings.
    - My Jobs page for users to view, update, and delete jobs they have posted.
    - All Jobs page showing all job listings in a tabular form with a search system.
    - Applied Jobs page for users to view jobs they have applied for, with a filter system based on job category.
    - Single Job Details page with job information and an apply button opening a modal to submit an application.



6. **Notifications**:
    - Toast/notification messages for all CRUD operations and login prompts.

## Pages

### Home
- **URL**: `/`
- **Description**: Contains a banner section and Job by Category tabs.

### Login
- **URL**: `/login`
- **Description**: Email/Password login form and Google Sign-in option.

### Registration
- **URL**: `/register`
- **Description**: Registration form with fields for name, email, password, and photo URL.

### All Jobs
- **URL**: `/alljobs`
- **Description**: Table of all job listings with search functionality.

### Add A Job (Private Route)
- **URL**: `/addjob`
- **Description**: Form to add a new job listing.

### My Jobs (Private Route)
- **URL**: `/myjobs`
- **Description**: Table of jobs posted by the logged-in user with options to update or delete.

### Applied Jobs (Private Route)
- **URL**: `/appliedjobs`
- **Description**: Table of jobs the user has applied for with filter options.

### Single Job Details (Private Route)
- **URL**: `/job/:id`
- **Description**: Detailed view of a single job with an apply button.

### Blogs
- **URL**: `/blogs`
- **Description**: Blog posts answering specific questions related to web development.

### 404
- **URL**: `/*`
- **Description**: Page not found.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/tasfiq-asif/jobhunt.git
    cd jobhunt
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file with the following environment variables:
    ```env
    REACT_APP_API_URL=your_api_url
    REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
    ```

4. Start the development server:
    ```sh
    npm start
    ```

## Usage

- **Navigating the Website**: Use the navbar to navigate between different sections.
- **Authentication**: Register or log in to access private routes.
- **Job Management**: Add, update, delete, and view job listings as per your requirements.
- **Blogs**: Read blog posts for insights on web development topics.

## Technologies Used

- **Frontend**: React,Swiperslider, React Router, React Tabs, React Hook form
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: firebase, Google OAuth
- **Styling**: DaisyUI,Tailwind custom CSS
- **Notifications**: React hot-toast,React sweetalert


## Contact Information
For inquiries or support, please contact us at [contact@artcraftstore.com](mailto:tasfiq.asif.23@gmail.com).

---

Thank you for using JobHunt! For any questions or issues, please contact us at support@jobhunt.com or visit our [contact page](#).
