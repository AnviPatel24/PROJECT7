import React,{useState} from "react";

import { useFormik } from 'formik';
import { signupschema } from '../schemas/login';
import axios from "axios";

const initialValues={
    
    cont:"",
    pass:"",
    
  };
function Login(){

    

    // Function to navigate to the NewComponent when the button is clicked
    const [FailureMessage, setFailureMessage] = useState('');

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema:signupschema,
        onSubmit:async (values,action) => {
            console.log("🚀 ~ file: Login.js:8 ~ Login ~ values:", values);
            console.log(values.cont);

            axios.post('http://192.168.43.54:8080/login', {
              contact_number: values.cont,
              hpassword: values.pass
            },{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then((response) => {
              console.log("hh",response.data[0]['_id']);
              
              localStorage.setItem('loginid',response.data[0]['_id']);
              if(response.status === 200 && response.data[0]['user_role']==='admin'){
                localStorage.setItem('User',response.data[0]['user_email']);
                localStorage.setItem('contact',response.data[0]['user_contact_number']);
                window.location.href='/Dash';
              }
              
               
              
            }, (error) => {
              console.log(error);
              setFailureMessage('Login Unsuccessfull.Please Try Again.');
            });
        
            action.resetForm();
        },
      });
      // console.log("🚀 ~ file: Login.js:26 ~ Login ~ errors:", errors)
    return(
        <>
          <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
  data-sidebar-position="fixed" data-header-position="fixed">
  <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">

    {/* Background Image Container */}
    <div className="background-image"></div>

    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xxl-3">
          <div className="card mb-0">
            <div className="card-body">
              <img src="assets/images/logos/ren-removebg-preview.png" width="60" style={{ marginLeft: '35px' }} alt="" />
              <p className="text-nowrap text-center d-block w-100" style={{ marginTop: '-35px', marginLeft: '25px', color: "black" }}>
                <b style={{ fontSize: 22 }}>PlatePlanner </b>
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="textcont" className="form-label">Contact Number</label>
                  <input type="text" autoComplete='off' value={values.cont} onChange={handleChange} onBlur={handleBlur} name="cont" className="form-control" id="textcont" />
                  {errors.cont && touched.cont ? (<p className="alert alert-danger" role="alert">{errors.cont}</p>) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" autoComplete='off' value={values.pass} onChange={handleChange} onBlur={handleBlur} className="form-control" name="pass" id="password" aria-describedby="checkpass" />
                  <div id="checkpass" className="form-text">Password Must Contain only 8 Characters Including Number. </div>
                  {errors.pass && touched.pass ? (<p className="alert alert-danger" role="alert">{errors.pass}</p>) : null}
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  {/*                     
                  <Link className="text-primary fw-bold" href="./index.html">Forgot Password ?</Link> */}
                </div>
                <button type="submit" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</button><br></br>
                {FailureMessage && <p className="alert alert-danger">{FailureMessage}</p>}
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