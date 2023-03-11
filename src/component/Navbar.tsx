import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-200 body-font bg-blue-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-200 mb-4 md:mb-0">
          <span className="ml-3 text-3xl">Logo.</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center justify-center text-xl">
          <a className="mr-10 hover:text-gray-900">Home</a>
          <a className="mr-10 hover:text-gray-900">About</a>
          <a className="mr-10 hover:text-gray-900">Offer</a>
          <a className="mr-10 hover:text-gray-900">Testimonials</a>
          <a className="mr-10 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
