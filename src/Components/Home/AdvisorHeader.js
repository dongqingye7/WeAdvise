import React from "react";
import UserInfo from "./UserInfo";

// reactstrap components
import { Card, Row, Col } from "reactstrap";
import withAuthorization from "../withAuthorization";
import { db } from "../../firebase";
import AdvisorInfo from './AdvisorInfo.js';
import Chart from "chart.js";

import {
  chartOptions,
  parseOptions,
  chartExample2
} from "../variables/charts";
import AdvisorData from "./AdvisorData.js";
// const UserInfo={
//   utaID: 0,
//   firstName: "John",
//   lastName: "Smith",
//   major: "Computer Science",
//   yearAttend: "2016"
// }
const appiontment="Dr. Conly 1pm to 3pm";
const appiontmentLocation="ERB 642";
const appiontmentTime="Tuesday, Feb 25, 2020"
const queueNumber=12;
const queueUser=5;

class Header1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
       parseOptions(Chart, chartOptions());
     }
  }
   toggleNavs = (e, index) => {
     e.preventDefault();
     this.setState({
       activeNav: index,
       chartExample1Data:
         this.state.chartExample1Data === "data1" ? "data2" : "data1"
     });
   };

  render() {
    const advisorCard=AdvisorInfo.map((advisor)=>{
      return(
        <Col lg="3">
          <AdvisorInfo firstName={advisor.firstName} lastName={advisor.lastName} office={advisor.office} image={advisor.image}/>
        </Col>
      )
    })


return(
  <Col className="mb-5 mb-xl-0" xl="12">
                <Card className="shadow card-stats">
                  <h3 className="text-uppercase ml-2 mb-1">
                  Undergraduate Advisors
                  </h3>
                  <Row>
                    {advisorCard}
                  </Row>
                </Card>
              </Col>
);
  }
}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Header1);