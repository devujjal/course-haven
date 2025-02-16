# CourseHaven - Online Learning Platform

[**CourseHaven**](https://coursehaven.netlify.app) is a fully functional online learning marketplace designed to provide users with a seamless experience for discovering, enrolling in, and managing courses. The platform caters to both students and admins/instructors, offering a wide range of features to enhance the learning and teaching experience. Built with modern web development technologies, CourseHaven demonstrates my expertise in full-stack development, including frontend, backend, database management, and third-party integrations.

---

## Key Features

### **For Students:**
1. **Course Browsing and Enrollment:**
   - Browse courses by category, sort them, and search for specific courses.
   - View detailed course information.
   - Enroll in courses or add them to a cart for future purchase.
   - Apply coupons during checkout for discounts.

2. **User Dashboard:**
   - Track enrolled courses, completed lessons, and achieved certificates.
   - Manage cart items and proceed to purchase.
   - View payment history and update profile information.

3. **Notifications:**
   - Receive email notifications upon course enrollment using **Nodemailer**.

4. **Secure Payments:**
   - Integrated **Stripe** payment gateway for secure transactions.

---

### **For Admins:**
1. **Dashboard:**
   - View platform statistics, including total courses, students, and revenue data (with a 7-day revenue chart).

2. **Course Management:**
   - Manage all courses with options to edit, delete, and search/filter and sorting courses.
   - Add new courses to the platform.

3. **User Management:**
   - Access and manage student and instructor data.
   - Remove users from the platform if necessary.

4. **Order Management:**
   - View all payment histories and order details.

---

## Technologies Used

### **Frontend:**
- **HTML, CSS, TailwindCSS**: For responsive and modern UI design.
- **JavaScript, React.js**: For building dynamic and interactive user interfaces.
- **React Router**: For seamless client-side routing.
- **TanStack Query (React Query)**: For efficient data fetching and state management.
- **Axios**: For API requests and interceptors.

### **Backend:**
- **Node.js with Express**: For building robust and scalable APIs.
- **MongoDB Atlas**: For database management and storage.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization.
- **Nodemailer**: For sending email notifications (e.g., course enrollment confirmation).

### **Authentication & Authorization:**
- **Firebase**: For user authentication (login/signup functionality).
- **Role-Based Access Control (RBAC)**: To differentiate between admin, instructor, and student roles.

### **Payment Integration:**
- **Stripe**: For secure payment processing.

---

## Functionality Overview

1. **Course Management:**
   - Admins/instructors can add, edit, and delete courses.
   - Students can browse, filter, and search for courses based on categories, price, and ratings.

2. **Enrollment System:**
   - Students can enroll in courses, and enrollment details are saved in the database.
   - Email notifications are sent to students upon successful enrollment.

3. **User Dashboard:**
   - Students can view their enrolled courses, track progress, and manage their profiles.
   - Admins can monitor platform statistics and manage users and courses.

4. **Payment System:**
   - Integrated with Stripe for secure and seamless payment processing.
   - Students can apply coupons during checkout for discounts.

5. **Secure Routes and API Endpoints:**
   - Implemented JWT-based authentication to secure routes and API endpoints.
   - Role-based access control ensures that only authorized users can access specific features.

---

## Why This Project?

CourseHaven showcases my ability to:
- Develop a full-stack web application from scratch.
- Implement complex features like role-based access control, payment integration, and email notifications.
- Use modern technologies like React, Node.js, MongoDB, and TailwindCSS.
- Ensure a seamless user experience with responsive design and efficient state management.
- Demonstrate problem-solving skills by integrating third-party services like Firebase, Stripe, and Nodemailer.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/devujjal/course-haven.git

2. Install dependencies:
   ```bash
   cd CourseHaven-Frontend
   npm install
   cd CourseHaven-Backend
   npm install

3. Set up environment variables:
   ```bash
   Create a .env file in the root directory and add the necessary keys (e.g., Firebase, Stripe, MongoDB Atlas, Nodemailer).

4. Start the development server:
   ```bash
   npm run dev
   

This project is a testament to my skills as a full-stack developer and my ability to deliver high-quality, user-centric web applications. Feel free to explore the code and provide feedback!
