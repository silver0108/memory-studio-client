import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
            <Link to="/home"><div className="header_link">홈</div></Link>
            <Link to="/letter"><div className="header_link">편지함</div></Link>
    </div>
  );
}