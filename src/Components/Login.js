import React from "react";
import {Link} from "react-router-dom";
import { useFormik } from 'formik';
import { signupschema } from '../schemas/login';
import axios from "axios";
const initialValues={
    
    cont:"",
    pass:"",
    
  };
function Login(){

    

    // Function to navigate to the NewComponent when the button is clicked
    

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema:signupschema,
        onSubmit:(values,action) => {
            console.log("🚀 ~ file: Login.js:8 ~ Login ~ values:", values);
            console.log(values.cont);

            axios({
              method: 'post',
              url: '/login',
              data: {
                username: values.cont,
                password: values.pass
              }
            }).then((response) => {

              localStorage.setItem("login",response.id);
              console.log('response id ', response._id );
              
              // Logout Code
              // localStorage.removeItem("login")
              
              
              // window.location.href="";  -->Redirect
            }, (error) => {
              console.log(error);
            });;

            action.resetForm();
        },
      });
      // console.log("🚀 ~ file: Login.js:26 ~ Login ~ errors:", errors)
    return(
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
     className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <Link href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="../assets/images/logos/dark-logo.svg" width="180" alt=""/>
                </Link>
                <p className="text-center">Your Social Campaigns</p>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                      <label htmlFor="textcont" className="form-label">Contact Number</label>
                      <input type="text" autoComplete='off' value={values.cont} onChange={handleChange} onBlur={handleBlur} name="cont" className="form-control" id="textcont"/>
                      {errors.cont && touched.cont ? ( <p className="alert alert-danger" role="alert">{errors.cont}</p> ):null}
                      
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" autoComplete='off' value={values.pass} onChange={handleChange} onBlur={handleBlur} className="form-control" name="pass" id="password" aria-describedby="checkpass"/>
                      <div id="checkpass" className="form-text">Password Must Contain only 6 characters with special characters and number. </div>
                      {errors.pass && touched.pass ? ( <p className="alert alert-danger" role="alert">{errors.pass}</p> ):null}
                    </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    
                    <Link className="text-primary fw-bold" href="./index.html">Forgot Password ?</Link>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</button>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
};

export default Login;