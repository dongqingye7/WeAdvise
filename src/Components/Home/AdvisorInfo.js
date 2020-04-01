// import React, { Component } from 'react';
// import Card from 'react-bootstrap/Card';



// class AdvisorInfo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             advisors: []
//         }
//     }
//     render() { 
//         var advisor1 = {AdvisorID: 0, firstName: "Linda", lastName: "Barasch", office: "ERB 643"};
//         var advisor2 = {AdvisorID: 1, firstName: "Christopher", lastName: "Conly", office: "ERB 642"};
//         var advisor3 = {AdvisorID: 1, firstName: "Katy", lastName: "Pedone", office: "ERB 645"};
//         var advisor4 = {AdvisorID: 1, firstName: "Melissa", lastName: "Rose", office: "ERB 644"};

//         this.state.advisors.push(advisor1);
//         this.state.advisors.push(advisor2);
//         this.state.advisors.push(advisor3);
//         this.state.advisors.push(advisor4);

//         let advisorlist=this.state.advisors.map((advisor, i)=> {
//             return (
//                 <div>
//                     <li key={i}> Name: {advisor.firstName} {advisor.lastName}</li>
//                     <li>Office: {advisor.office}</li>
//                     <hr></hr>                    
//                 </div>
//             );
//         });
//         return (
//             <Card border="primary">
//                 <Card.Header>Advisor Information</Card.Header>
//                 <Card.Body>
//                     <Card.Text>
                        
//                         {advisorlist}
                                           
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//         );
//     }
// }
 
// export default AdvisorInfo;
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft:"5px",
    marginBottom: "8px"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "30%",
    height: 'auto'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {props.firstName+" "+props.lastName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.office}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.image}
      />
    </Card>
  );
}

