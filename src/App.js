import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Products from "./Components/Products";
import Orders from "./Components/Orders";
import OrdersCalendarView from "./Components/OrdersCalendarView";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/calendar" element={<OrdersCalendarView/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;