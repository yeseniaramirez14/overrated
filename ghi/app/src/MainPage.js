import { Link } from 'react-router-dom';
import './App.css';
import React from 'react';



function MainPage() {

  return (
    <div className="px-4 my-5 text-center" >
    <div id="container">
      <div className="col1">
      <h1 className="display-5 fw-bold">OverRated</h1>
      <div className="logo">
      <p className="lead mb-4">
          The premiere solution for loneliness!
        </p>
      <br></br>
      </div>
      <div id="termswbutton">
        <p className="termsandconditions">
        By clicking Join, you agree to our Terms. 
        Learn how we process your data in our Privacy Policy and Cookies Policy.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/login/new" className="btn btn-primary btn-lg px-4 gap-3">Find your Love Today!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MainPage;
