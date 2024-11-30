import React from "react";
import { FaBookOpen } from "react-icons/fa6";

function Header() {
  return (
    <div className="header">
      <h1>
        <FaBookOpen style={{ color: "orange", marginRight: "12px" }} />
        Sabzlearn JS<strong style={{ color: "orange" }}>Book</strong>List
      </h1>
    </div>
  );
}

export default Header;
