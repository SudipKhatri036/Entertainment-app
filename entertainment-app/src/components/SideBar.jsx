import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

function SideBar() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleBookmark = () => {
    if (!isLoggedIn) {
      toast.error("Please login first");
      navigate("/login");
    } else {
      navigate("/bookmarks");
    }
  };

  return (
    <aside className="lg:fixed flex w-full lg:w-auto lg:flex-col items-center justify-between z-20 bg-prime-700 lg:h-[80vh]  px-6 py-8 rounded-lg">
      <Link to="/">
        <svg
          className="h-[25px] w-[30px] lg:h-[28.6px] lg:w-[38px]"
          viewBox="0 0 33 27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
            fill="#FC4747"
          ></path>
        </svg>
      </Link>
      <ul className="flex lg:flex-col items-center gap-4 lg:gap-8">
        <li>
          <NavLink to="/">
            <svg
              className="h-[20px] w-[25px] lg:h-[25.6px] lg:w-[32px] hover:fill-danger-100 transition-all duration-300"
              fill="currentColor"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"></path>
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to="/movie">
            <svg
              className="h-[20px] w-[25px] lg:h-[25.6px] lg:w-[32px] hover:fill-danger-100 transition-all duration-300"
              fill="currentColor"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"></path>
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tv">
            <svg
              className="h-[20px] w-[25px] lg:h-[25.6px] lg:w-[32px] hover:fill-danger-100 transition-all duration-300"
              fill="currentColor"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"></path>
            </svg>
          </NavLink>
        </li>
        <li>
          <button
            onClick={handleBookmark}
            className="cursor-pointer"
            disabled={!isLoggedIn}
          >
            <svg
              className={`h-[20px] w-[30px] lg:h-[30.6px] lg:w-[45px] hover:fill-danger-100 transition-all duration-300 ${
                isLoggedIn ? "" : "fill-prime-300 hover:fill-prime-300"
              }`}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="1.5em"
              height="100"
              viewBox="0 0 30 30"
            >
              <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
            </svg>
          </button>
        </li>
      </ul>
      <Link
        to={`${isLoggedIn ? "/profile" : "/login"}`}
        className={`block w-12 ${isLoggedIn ? "" : "hover:underline"}`}
      >
        {isLoggedIn ? (
          <img
            src="/avatar.png"
            alt="Avatar image"
            className="max-w-full border-2 rounded-3xl hover:border-danger-100 transition-all duration-300"
          />
        ) : (
          "Login"
        )}
      </Link>
    </aside>
  );
}

export default SideBar;
