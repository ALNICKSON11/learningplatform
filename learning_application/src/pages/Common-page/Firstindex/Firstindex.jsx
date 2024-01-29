import React from "react";
import './Firstindex.css';
import { Outlet } from "react-router-dom";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

function Firstindex() {
  return (
    <div>
      <Header/>
      <div>
        <Outlet />
      </div>
      <div>
      <Footer/>
      </div>

    </div>
  );
}

export default Firstindex;
