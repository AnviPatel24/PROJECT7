import * as Yup from "yup";

const signupschema=Yup.object({
    
    oldpass:Yup.string().matches(
      /^[a-zA-Z0-9]{5,9}$/,
        'Invalid password format'
      ).required('Password is required'),
    
    newpass: Yup.string().matches(
      /^[a-zA-Z0-9]{5,9}$/,
        'Invalid password format'
      ).required('Password is required'),

      newpasscheck:Yup.string().matches(
        /^[a-zA-Z0-9]{5,9}$/,
          'Invalid password format'
        ).required('Password is required').oneOf([Yup.ref('newpass'),null],"PassWord Must Match")
      
    
})

export default signupschema;