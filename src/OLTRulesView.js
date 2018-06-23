import React from 'react';
import StatusCard from './StatusCard'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

class OLTRulesView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var intervalId = setInterval(this.updateFromBackend.bind(this), 200);
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

  render(){
    if (!this.state.backend) return (<div/>)
    return(
      <div className={"mainContainer"}>
          <h1>Rules</h1>
          <p>{JSON.stringify(this.state.backend.rules[0])}</p>
          <Divider />
          <p>
          {JSON.stringify(this.state.backend.rules[1])}
          </p>
          <Divider />
          <p>
          {JSON.stringify(this.state.backend.rules[2])}
          </p>
      </div>
    )
  }
}

export default OLTRulesView
