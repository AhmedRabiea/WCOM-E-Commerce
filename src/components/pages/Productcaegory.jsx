import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";

// styles
import "../css/Productcategory.css";
import Homedesign from "./Homedesign";

function Productcaegory() {
  return (
    <React.Fragment>
      <div className="container-fluid p-2 d-flex" id="Cart-content">
        <Sidebar />
        <div className="m-2">
          <Routes>
            <Route path="/product-category">
              <Route path="content" element={<Homedesign />} />
            </Route>
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Productcaegory;
