import React,{ useState} from "react";
import { useFormik } from 'formik';
import { addmenus } from '../schemas/menu';
import axios from 'axios'
const initialValues={
    days:"",
    Lunch:"",
    Breakfast:"",
    Dinner:"",
  };


function Addmenu(){
    const [successMessage, setSuccessMessage] = useState('');
    const [FailureMessage, setFailureMessage] = useState('');
    const {values,errors,touched,handleBlur,handleChange,handleSubmit,onSubmitting} = useFormik({
        initialValues: initialValues,
        validationSchema:addmenus,
        onSubmit:(values,action) => {

          axios
          .post(
            'http://192.168.43.54:8080/menu',
            {
              days: values.days,
              Lunch: values.Lunch,
              Breakfast: values.Breakfast,
              Dinner: values.Dinner,
             
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

            console.log("🚀 ~ file: Addmenu.js:8 ~ Addmenu ~ values:", values);
            action.resetForm();
        },
      });

    return(
        <>
            <div className="container-fluid">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-4">Menu Registration</h5>
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="days" className="form-label">Day</label>
                    <select  value={values.days} onChange={handleChange} onBlur={handleBlur} id="days" className="form-select" name="days" aria-label="Default select example">
                    <option value="0">Open this select menu</option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    
                    </select>
                      
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Breafast" className="form-label">Breakfast</label>
                      <textarea autoComplete='off' value={values.lname} onChange={handleChange} onBlur={handleBlur} className="form-control" name="Breakfast" id="breakfast"></textarea>
                      {errors.Breakfast && touched.Breakfast ? ( <p className="alert alert-danger" role="alert">{errors.Breakfast}</p> ):null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Lunch" className="form-label">Lunch</label>
                      <textarea autoComplete='off' value={values.lunch} onChange={handleChange} onBlur={handleBlur} className="form-control" name="Lunch" id="lunch"></textarea>
                      
                      {errors.Lunch && touched.Lunch ? ( <p className="alert alert-danger" role="alert">{errors.Lunch}</p> ):null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Dinner" className="form-label">Dinner</label>
                      <textarea autoComplete='off' value={values.dinner} onChange={handleChange} onBlur={handleBlur} className="form-control" name="Dinner"  id="dinner"></textarea>
                      
                      {errors.Dinner && touched.Dinner ? ( <p className="alert alert-danger" role="alert">{errors.Dinner}</p> ):null}
                    </div>
                    
                    <button type="submit" disabled={onSubmitting} className="btn btn-primary">Submit</button>
                    <br></br>
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
    );
};

export default Addmenu;