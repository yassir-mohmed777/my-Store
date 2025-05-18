import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ThankYouPage() {
 
  return (
    <div className="container text-center my-5" style={{height: "60vh"}}>
      <div className="d-flex h-100 align-items-center flex-column justify-content-center">
      <h1 className="mb-4">🎉 Thank You!</h1>
      <p className="lead">Your order has been placed successfully.</p>
      <p>We’ll process it and contact you soon with the shipping details.</p>
      <Link to="/" className="btn btn-dark mt-4">
        Back to Home
      </Link>
      </div>
    </div>
  );
}

