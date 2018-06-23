import React from 'react';
import StatusCard from './StatusCard'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class OLTStatusView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var intervalId = setInterval(this.updateFromBackend.bind(this), 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
   // use intervalId from the state to clear the interval
   clearInterval(this.state.intervalId);
  }

  updateFromBackend() {
     fetch(`http://localhost:3000/`)
      .then(result=> result.json() )
      .then(backend => this.setState({backend}))
      .then(()=>console.log(this.state))
  }

  hackTime() {
    fetch(`http://localhost:3000/hack-time`)
      .then(result=> result.json() )
      .then(r=>console.log(r))
  }

  render(){
    if (!this.state.backend) return (<div/>)
    return(
      <div className={"mainContainer"}>

          <h1>Status</h1>
            <Grid container spacing={24}>
              <StatusCard xs title={"Time"} value={this.state.backend.state.time} symbol={""}/>
            </Grid>

          <h2>Inside</h2>
          <Grid container spacing={24}>
            <StatusCard xs title={"People Inside"} value={this.state.backend.state.inside.humans} symbol={" People"}/>
            <StatusCard xs title={"CO2 Inside"} value={this.state.backend.state.inside.co2} symbol={" PPA"}/>
            <StatusCard xs title={"Temperature Inside"} value={this.state.backend.state.inside.temperature} symbol={"°C"}/>
            <StatusCard xs title={"Humidity Inside"} value={this.state.backend.state.inside.humidity} symbol={"%"}/>
          </Grid>
          <h2>Outside</h2>
          <Grid container spacing={24}>
          <StatusCard title={"Humidity Outside"} value={this.state.backend.state.outside.humidity} symbol={"%"}/>
          <StatusCard title={"Temperature Outside"} value={this.state.backend.state.outside.temperature} symbol={"°C"}/>
          </Grid>
          <br/><br/>
          <Grid container spacing={24}>
          <Button onClick={this.hackTime}>Hack Time!</Button>
          </Grid>
      </div>
    )
  }
}

export default OLTStatusView
