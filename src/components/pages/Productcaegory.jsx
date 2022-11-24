import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";

// styles
import "../css/Productcategory.css";
// Routes
import Sofafurniture from "./Sofafurniture";
import Electronics from "./Electronics";
import Smarthome from "./Smarthome";
import Office from "./Office";
import Maincontent from "./Maincontent";

function Productcaegory() {
  return (
    <React.Fragment>
      <div className="container-fluid p-2 d-flex" id="Cart-content">
        <Sidebar />
        <div className="m-2">
          <Routes>
            <Route path="/" element={<Maincontent />} />
            <Route path="office" element={<Office />} />
            <Route path="sofa-furniture" element={<Sofafurniture />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="smart-home" element={<Smarthome />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Productcaegory;
