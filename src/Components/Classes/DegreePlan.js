import React, { Component }from 'react';
import img_CS from "./Flowchart_CS.jpg";
import img_CSE from "./Flowchart_CSE.jpg";
import img_SW from "./Flowchart_SW.jpg";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class DegreePlan extends Component {
    
    constructor() {
        super();
        this.state = { 
            selectedOption: 'CS', 
            img_url: img_CS
         }
    }


    render() { 
        const handleChange = (e) => {
            var selectedOption=e.target.value;
            var url=this.state.img_url;
            if (selectedOption==="CS"){
                url=img_CS;
            }else if(selectedOption==="CSE"){
                url=img_CSE;
            }else{
                url=img_SW;
            }
            return this.setState(
              { selectedOption: selectedOption,
                img_url: url
                }
            );
          };
        return (
            <div className="container align-content-center">
            <FormControl>
                <InputLabel className="h4">Major</InputLabel>
                <Select
                labelId="major"
                id="major"
                value={this.state.selectedOption}
                onChange={handleChange}
                >
                <MenuItem value={"CS"}>Computer Science</MenuItem>
                <MenuItem value={"CSE"}>Computer Engineering</MenuItem>
                <MenuItem value={"SW"}>Software Engineering </MenuItem>
                </Select>
            </FormControl>
                <img src={this.state.img_url} alt="degreeplan" height="100%" width="100%"></img>
            </div>
            
        );
    }
}
 
export default DegreePlan;