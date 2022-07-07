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
        <li>
          <button className="btn" onClick={onLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </li>
      ) : (
        <></>
      )}
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
      </section>
    </>
  );
}

export default Dashboard;
