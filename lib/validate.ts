import { LoginProps,RegisterProps } from "@/typing";

interface LoginErrors {
    password?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
}
interface RegisterErrors{
  username?:string
  email?:string
  password?:string
  cpassword?:string
}

export const login_validate=(values:LoginProps):LoginErrors=>{
  const errors:LoginErrors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 and less than 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  return errors;
}

export const register_validate=(values:RegisterProps):RegisterErrors=>{
  const errors:RegisterErrors = {};

  //validation for username
  if (!values.username){
    errors.username = "Required"
  }else if (values.username.includes("")){
    errors.username = "Invalid U sername"
  }

  //validation for email

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 and less than 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  //validation for confirm password
  if(!values.cpassword){
    errors.cpassword="Required"
  }else if (values.password !== values.cpassword){
    errors.cpassword ="Password Not Match..."
  }else if(values.cpassword.includes("")){
    errors.cpassword = "Invalid Confirm Password"
  }
  
  return errors

}