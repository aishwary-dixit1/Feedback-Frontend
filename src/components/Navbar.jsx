import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navigate = useNavigate();

  const [formpage, setFormpage] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonName, setButtonName] = useState("View Submitted Feedback");

  const handleView = () => {
    if (formpage) {
      setFormpage(false);
      navigate("/feedback-list");
      setButtonName("Submit New Feedback");
    } else {
      setFormpage(true);
      navigate("/");
      setButtonName("View Submitted Feedback");
    }
    setMenuOpen(false); 
  };

  return (
    <>
      <div className="navbar bg-primary text-primary-content fixed top-0 left-0 w-full z-50 px-4">
        <div className="flex-1">
          <button className="btn btn-ghost text-xl">Feedback</button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <button className="btn btn-outline" onClick={handleView}>
            {buttonName}
          </button>
        </div>

        <div className="md:hidden">
          <button className="btn btn-square btn-ghost" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-primary text-primary-content shadow-md z-40 px-4 py-3 flex flex-col items-center gap-3">
          <ThemeToggle />
          <button className="btn btn-outline w-full" onClick={handleView}>
            {buttonName}
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
