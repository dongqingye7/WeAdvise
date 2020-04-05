import React from "react";
import UserInfo from "./UserInfo"
import Chart from "chart.js";

// reactstrap components
import { Card, CardBody, CardTitle, CardText, Container, Row, Col } from "reactstrap";
import withAuthorization from "../withAuthorization";
import { db } from "../../firebase";
import AdvisorInfo from './AdvisorInfo.js';
import {
  chartOptions,
  parseOptions,
  chartExample2
} from "../variables/charts";

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


var advisors=[
  {
    AdvisorID: 1,
    firstName: "Linda",
    lastName: "Barasch",
    office: "ERB 643",
    image:"https://cdn.web.uta.edu/-/media/project/website/engineering/faculty-headshots/large_portrait/barasch_linda.ashx?la=en&revision=610a312b-3e54-44cb-b395-ee90f9285b27&hash=C902D3B5F4EB8A2B3987F51B58175189"
  },
  {
    AdvisorID: 2,
    firstName: "Chris",
    lastName: "Conly",
    office: "ERB 642",
    image:"https://cdn.web.uta.edu/-/media/project/website/engineering/faculty-headshots/large_portrait/conly_christopher.ashx?la=en&revision=6cd7fb39-50e9-4246-8f9f-82df1d074d97&hash=BF4602F406A33218E2B161CE51DC384E"
  },
  {
    AdvisorID: 3,
    firstName: "Katy",
    lastName: "Pedone",
    office: "ERB 645",
    image: "https://cdn.web.uta.edu/-/media/project/website/engineering/computer-science-department/_portraits/pedone-katy.ashx?la=en&revision=1406090c-ce0d-4107-a923-d3495336fca4&hash=A359E61124ED3F4C44F8135F986AC328"
  }, 
  {
    AdvisorID: 4,
    firstName: "Melissa",
    lastName: "Rose",
    office: "ERB 644",
    image: "https://cdn.web.uta.edu/-/media/project/website/engineering/computer-science-department/_portraits/rose-melissa.ashx?la=en&revision=94bf83c7-6fd7-4913-8173-2c93625a5653&hash=38813D4F7AE8084652C3A67C52DA8128"
  },
]


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
    const advisorCard=advisors.map((advisor)=>{
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