import React from "react";
import { Button } from "reactstrap";

import { auth } from "../firebase";


const SignOutButton  = () => (
  
  <Button  href = "/" color="info" onClick={auth.doSignOut} >
    Sign Out
  </Button>
  
  
);

export default SignOutButton;
