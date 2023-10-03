import * as Yup from "yup";

export const signupschema=Yup.object({
    
    cont:Yup.string().matches(/^[789]\d{9}$/, 'Invalid Indian contact number').required('Contact number is required'),
    pass: Yup.string().matches(
      /^[a-zA-Z0-9]{5,9}$/,
        'Invalid password format'
      ).required('Password is required'),
    
})