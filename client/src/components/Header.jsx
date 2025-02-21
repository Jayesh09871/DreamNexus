import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Buy from "../house/Buy";
import React from "react";

const handleSubmit = (e) => {
  e.preventDefault();
};

export default function Header() {
  return (
    <header className="bg-white-200 shadow-md ">
      <div className="flex justify-between items-center max-w-7xl ml-[2rem] mx-auto px-3">
        <Link to="/b">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <img src='https://www.logomaker.com/api/main/images/1j+ojlxEOMkX9Wyqfhe43D6kh...6HrhRJnhbEwXs1M3EMoAJtlyMkjvVr...Pk6PExevg9C3ktKMcs8'   width="120px" height="1px" ></img>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline  text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About Us
            </li>
          </Link>
          <Link to="/buy">
          <li className="hidden sm:inline text-slate-700 hover:underline">
              Buy
            </li>
          </Link>
          <Link to="/Rent">
          <li className="hidden sm:inline text-slate-700 hover:underline">
             Rent
            </li>
          </Link>
          <Link to="/profile">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              className='rounded-full h-7 w-7 object-cover'
              alt="profile"
            />
          </Link>
        </ul>
      </div>
    </header>
  );
}
