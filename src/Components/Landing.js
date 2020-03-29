import React from "react";
import * as routes from "../constants/routes";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


const LandingPage = () => (
  <div>
    <h1>Landing Page</h1>
    <Button type="submit"
            
            variant="contained"
            href = "/advisor-login"
            >
            Advisor          
            </Button>

    <Button type="submit"
            href = "/signin"
            variant="contained"
            >
            Student     
    </Button>
    
     
  </div>
);

export default LandingPage;
