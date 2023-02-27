import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    }
  }, []);

  const currentUser = {
    id: 1,
    username: "Shubham",
    isSeller: true
  }

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> */}
          <span className="text">WeKnewHow </span>
          {/* </Link> */}
          {/* <span className="text">• E-Marketplace</span> */}
        </div>
        <div className="links">
          <span>Explore</span>
          <span className="myPointer">Offer Services</span>
          <span className="myPointer">WKH Business</span>
          {!currentUser?.isSeller && <span className="myPointer">Become a Seller</span>}
          {!currentUser?.username && <span>Sign In</span>}
          {!currentUser?.username && <span>Join</span>}
          {currentUser?.username && (
            <div className="user" onClick={() => setOpen(prev => !prev)}>
              <img
                src="/company/wkhLogo.png"
                alt="Profile"
              />
              <span style={{ color: "#C69749" }}>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Services</span>
                      <span>Add new Service</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>My Chats</span>
                  <span>Log Out</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active &&
        <>
          <hr />
          <div className="menu">
            <span>Photography</span>
            <span>Graphics & Design</span>
            <span>Video & Animation</span>
            <span>Programming Tech</span>
            <span>Writing & Translation</span>
            <span>AI Services</span>
            <span>Business</span>
          </div>
        </>
      }
    </div>
  )
}