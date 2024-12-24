# E-Commerce Platform

An end-to-end e-commerce web application designed for seamless online shopping experiences. The platform features user authentication, product browsing, cart management, and order placement with a fully responsive design.

## Features

### Frontend

- **User Authentication:** Register and login functionality with JWT for session management.
- **Product Browsing:** View products by category, subcategory, or search.
- **Cart Management:** Add products to the cart, update quantities, and remove items.
- **Order Placement:** Place orders with delivery details and payment options (Cash on Delivery or Stripe).
- **Responsive Design:** Fully responsive layout for desktop and mobile devices.
- **Notifications:** Real-time notifications using `react-toastify`.

### Backend

- **RESTful APIs:** APIs for authentication, product management, cart handling, and order placement.
- **Authentication:** Secure user login using JWT.
- **Database Models:** User, Product, Cart, and Order models in MongoDB.
- **Payment Integration:** Stripe integration for secure payments.
- **Error Handling:** Comprehensive error handling for all endpoints.

### Admin Features

- **Order Status Management:** Change the status of orders to "Packed," "Shipped," or "Delivered."
- **Product Management:** Add new products, update product details, and delete products.
- **Dashboard:** Monitor and manage all orders and products efficiently.

## Tech Stack

### Frontend

- React
- React Router
- React Context API
- Axios
- React Toastify
- Tailwind CSS for styling

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Stripe API for payment processing

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/buttaakhil/Buy-Me
   cd ecommerce-platform
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following:
   ```env
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

4. Start the development servers:
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```
   - Backend:
     ```bash
     cd backend
     npm start
     ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.



## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.



---

Happy coding! 🎉
