import React from 'react';
import withAuthorization from "../withAuthorization";


function Schedule() {
  return (
    <div className="Schedule">
      <h1>Schedule Page</h1>
    </div>
  );
}

const authCondition = authUser => !!authUser;


export default withAuthorization(authCondition)(Schedule);