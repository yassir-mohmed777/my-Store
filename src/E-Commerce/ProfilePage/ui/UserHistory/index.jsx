import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcOk } from "react-icons/fc";

export default function UserHistory({ userName, userOrder }) {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const visibleOrders = showAll ? userOrder : userOrder.slice(0, 2);

  const logOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="col-12">
      <h5 className="text-secondary my-4 mb-md-4">
        Wellcom {userName} (Not {userName} ?{" "}
        <Link onClick={logOut} className="text-secondary" role="button">
          Sign out
        </Link>{" "}
        )
      </h5>
      <div>
        <p className="m-0 fw-bold">Orders History :</p>
        {userOrder.length === 0 ? (
          <div className="d-flex align-items-center gap-1">
            <FcOk />
            <Link to={"/shop"} className="text-secondary">
              Make your first order
            </Link>
            <p className="text-secondary m-0">
              You haven't placed any order yet
            </p>
          </div>
        ) : (
          <div className="list-group">
            {visibleOrders.map((order) => (
              <div key={order.documentId} className="list-group-item py-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">Order #{order.order_code}</h5>
                  <span
                    className={`badge ${
                      order.order_status === "pending"
                        ? "bg-warning"
                        : "bg-success"
                    }`}
                  >
                    {order.order_status.toUpperCase()}
                  </span>
                </div>

                <div className="mb-2">
                  <small className="text-muted">
                    Date: {new Date(order.createdAt).toLocaleDateString()}
                  </small>
                </div>

                <div className="mb-2">
                  <strong>Total:</strong> ${order.total_price}
                </div>

                <div className="mb-3">
                  <strong>Payment:</strong>{" "}
                  {order.payment_method === "cod"
                    ? "Cash on Delivery"
                    : "Card Payment"}
                </div>
              </div>
            ))}
            {userOrder.length > 2 && (
              <div className="text-center mt-4">
                <button
                  className="btn btn-dark"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
