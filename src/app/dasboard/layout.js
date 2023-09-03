"use client";
import React from "react";
import SideBar from "./sidebar";
import Footer from "./footer";
import './layout.css';

function DashboardLayout({ children }) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        {children}
      </div>
      <Footer/>
    </div>
  );
}

export default DashboardLayout;
