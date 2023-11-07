// Example Stud.js
import React, {useState} from 'react'
import { useFormik } from 'formik'
import { signupschema } from '../schemas/handle'
import axios from 'axios'
const initialValues = {
  fname: '',
  lname: '',
  email: '',
 
  cont: '',
  
  pass: '',
  c_pass: ''
}

function Handler () {
  const [successMessage, setSuccessMessage] = useState('');
  const [FailureMessage, setFailureMessage] = useState('');
  const { values, errors, touched, handleBlur, handleChange, handleSubmit,onSubmitting } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupschema,
      onSubmit: (values, action) => {
        axios
          .post(
            'http://172.20.10.3:8080/hnreg',
            {
              fname: values.fname,
              lname: values.lname,
              email: values.email,
             
              contact_number: values.cont,
              hpassword: values.pass,
              chpassword:values.c_pass
            },
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
          .then(
            response => {
              console.log('hh', response.status);
              setSuccessMessage('Registration successful');
              // localStorage.setItem('loginid', response.data[1][0]['_id'])
              // if (response.status === 200) {
              //   window.location.href = '/Dash'
              // }
            },
            error => {
              console.log(error)
              setFailureMessage('Registration Unsuccessful,Something went wrong.Please try again.');
            }
          )

        console.log('🚀 ~ file: Handler.js:8 ~ Handler ~ values:', values)
        action.resetForm()
      }
    })
  //console.log("🚀 ~ file: Stud.js:26 ~ Stud ~ errors:", errors)
  // console.log("🚀 ~ file: Stud.js:22 ~ Stud ~ Formik:", Formik);
  return (
    <>
      <div className='container-fluid'>
        <div className='container-fluid'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title fw-semibold mb-4'>
                Mess Handler Registration Form
              </h5>
              <div className='card'>
                <div className='card-body'>
                  <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                      <label htmlFor='textfname' className='form-label'>
                        First Name
                      </label>
                      <input
                        type='text'
                        autoComplete='off'
                        value={values.fname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='form-control half-width-input'
                        name='fname'
                        id='textfname'
                      />
                      {errors.fname && touched.fname ? (
                        <p className='alert alert-danger' role='alert'>
                          {errors.fname}
                        </p>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='textlname' className='form-label'>
                        Last Name
                      </label>
                      <input
                        type='text'
                        autoComplete='off'
                        value={values.lname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='form-control'
                        name='lname'
                        id='textlname'
                      />
                      {errors.lname && touched.lname ? (
                        <p className='alert alert-danger' role='alert'>
                          {errors.lname}
                        </p>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='textEmail' className='form-label'>
                        Email address
                      </label>
                      <input
                        type='email'
                        autoComplete='off'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='form-control'
                        name='email'
                        id='textEmail'
                        aria-describedby='Memail'
                      />
                      <div id='Memail' className='form-text'>
                        We'll never share your email with anyone else.
                      </div>
                      {errors.email && touched.email ? (
                        <p className='alert alert-danger' role='alert'>
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                    
                    <div className='mb-3'>
                      <label htmlFor='textcont' className='form-label'>
                        Contact Number
                      </label>
                      <input
                        type='text'
                        autoComplete='off'
                        value={values.cont}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='cont'
                        className='form-control'
                        id='textcont'
                      />
                      {errors.cont && touched.cont ? (
                        <p className='alert alert-danger' role='alert'>
                          {errors.cont}
                        </p>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='password' className='form-label'>
                        Password
                      </label>
                      <input
                        type='password'
                        autoComplete='off'
                        value={values.pass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='form-control'
                        name='pass'
                        id='password'
                        aria-describedby='checkpass'
                      />
                      <div id='checkpass' className='form-text'>
                        Password Must Contain only 8 characters including number.{' '}
                      </div>
                      {errors.pass && touched.pass ? (
                        <p className='alert alert-danger' role='alert'>
                          {errors.pass}
                        </p>
                      ) : null}
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='c_password' className='form-label'>
                        Confirm Password
                      </label>
                      <input
                        type='password'
                        autoComplete='off'
                        className='form-control'
                        value={values.c_pass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='c_pass'
                        id='c_password'
                      />
                      {errors.c_pass && touched.c_pass ? (
                        <p className='alert alert-danger' role='alert'>
                          {errors.c_pass}
                        </p>
                      ) : null}
                    </div>
                    
                    <button type='submit' disabled={onSubmitting} className='btn btn-primary'>
                      Submit
                    </button><br></br><br></br>
                    {successMessage && <p className="alert alert-success">{successMessage}</p>}
                    {FailureMessage && <p className="alert alert-danger">{FailureMessage}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Handler