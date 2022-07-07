import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { FaSignOutAlt } from "react-icons/fa";
function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {};
  }, [user, navigate]);

  return (
    <>
      {user ? (
        <button className="btn logout" onClick={onLogout}>
          <FaSignOutAlt /> Logout
        </button>
      ) : (
        <></>
      )}
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <h3>Email {user && user.email}</h3>
        <h4>Phone: +0100000</h4>
        <hr/>
        <p>Due: $100</p> 
        <p>Paid: $400</p>
        <hr/>
      </section>
    </>
  );
}

export default Dashboard;
