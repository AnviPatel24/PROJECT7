import React from "react";
import { useFormik } from 'formik';
import  signupschema  from '../schemas/newschema';
import axios from "axios";


const initialValues={
    
   oldpass:"",
    newpass:"",
    newpasscheck:""
  };
function ChangeP(){

    var contact=localStorage.getItem('contact')

    // Function to navigate to the NewComponent when the button is clicked
    

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema:signupschema,
        onSubmit:async (values,action) => {
            console.log("🚀 ~ file: ChangeP.js:8 ~ ChangeP ~ values:", values);
            console.log(values.oldpass,values.newpass,contact);

            axios.post('http://172.20.10.3:8080/chpass', {
            contact_number:contact,
              hpassword: values.oldpass,
              newpassword: values.newpass,
              
            },{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then((response) => {
              console.log("hh",response.data['_id']);
              
              
              if(response.status === 200){
                window.location.href='/Dash';
              }
            }, (error) => {
              console.log(error);
            });
        
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
              <img src="assets/images/logos/ren-removebg-preview.png" width="60" style={{marginLeft:'15px'}} alt=""/> <p className="text-nowrap text-center d-block w-100" style={{ marginTop: '-35px', marginLeft:'30px', color:"black" }}><b style={{fontSize:22}}>PlatePlanner </b></p>
                
                
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                      <label htmlFor="oldpass" className="form-label">Current Password</label>
                      <input type="password" autoComplete='off' value={values.cont} onChange={handleChange} onBlur={handleBlur} name="oldpass" className="form-control" id="textcont"/>
                      {errors.oldpass && touched.oldpass ? ( <p className="alert alert-danger" role="alert">{errors.oldpass}</p> ):null}
                      
                    </div>
                    <div className="mb-3">
                      <label htmlFor="newpass" className="form-label">Password</label>
                      <input type="password" autoComplete='off' value={values.newpass} onChange={handleChange} onBlur={handleBlur} className="form-control" name="newpass" id="password" aria-describedby="checkpass"/>
                      
                      {errors.newpass && touched.newpass ? ( <p className="alert alert-danger" role="alert">{errors.newpass}</p> ):null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="newpasscheck" className="form-label">Password</label>
                      <input type="password" autoComplete='off' value={values.newpasscheck} onChange={handleChange} onBlur={handleBlur} className="form-control" name="newpasscheck" id="password" aria-describedby="passchecknew"/>
                      <div id="passcnecknew" className="form-text">Password Must Contain only 8 Characters Including Number. </div>
                      {errors.newpasscheck && touched.newpasscheck ? ( <p className="alert alert-danger" role="alert">{errors.newpasscheck}</p> ):null}
                    </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
{/*                     
                    <Link className="text-primary fw-bold" href="./index.html">Forgot Password ?</Link> */}
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

export default ChangeP;