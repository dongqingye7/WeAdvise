import React from 'react';
import Headerh from "../Layouts/Header"

function Help() {
  return (
    <>
    <Headerh/>
    <div className="Help">
      <h1>Help Page</h1>
      <a href="mailto:cseugadvising@uta.edu?subject=Question&body=Hi">Contact Advisor</a>
    </div>
    </>
  );
}

export default Help;