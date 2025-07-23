import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={{ padding: "1rem" }}>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/admin/products">Products</Link> |{" "}
        <Link to="/admin/orders">Orders</Link> |{" "}
        <Link to="/admin/payment-options">Payments</Link>
      </nav>
      <Outlet />
    </div>
  );
}
