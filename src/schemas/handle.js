import * as Yup from "yup";

export const signupschema=Yup.object({
    fname:Yup.string().min(2,"First Name Must Be Atleast 2 Characters").max(25).matches(/^[A-Z][a-zA-Z]*$/, 'Numbers,special characters Not Allowed and First Letter Must Be Capital').required('First name is required'),
    lname:Yup.string().min(2,"Last Name Must Be Atleast 2 Characters").max(25).matches(/^[A-Z][a-zA-Z]*$/, 'Numbers,special characters Not Allowed and First Letter Must Be Capital').required("Please Enter Your Last Name"),
    email:Yup.string().email().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Invalid email address')
    .required('Email is required'),
    cont:Yup.string().matches(/^[789]\d{9}$/, 'Invalid Indian contact number').required('Contact number is required'),
    pass: Yup.string().matches(
      /^[a-zA-Z0-9]{5,9}$/,
        'Invalid password format'
      ).required('Password is required'),
    c_pass:Yup.string().required("Confirm Password Necessary").oneOf([Yup.ref('pass'),null],"PassWord Must Match")
})