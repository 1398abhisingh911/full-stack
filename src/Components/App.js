import React from "react";
import Navbar from "./Navbar/Navbar.js";
import Register from "./Register/Register.js";
import Login from "./Login/Login";

const App = () => {
  return (
    <div>
      <Navbar className="Header justify-content-center" dark={true}>
        Login Page
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Register></Register>
          </div>
          <div className="col-6">
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
