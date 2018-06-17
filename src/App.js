import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import OLTStatusView from './OLTStatusView'
import OLTRulesView from './OLTRulesView'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Rules = () => (
  <div>
    <h2>Rules</h2>
  </div>
)

const ThisBuildingRules = () => (
  <Router>
    <div>
    <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            This Building Rules!  
          </Typography>
          <Link to="/status"><Button>Status</Button></Link>
          <Link to="/rules"><Button>Rules</Button></Link>
        </Toolbar>
      </AppBar>

      <Route exact path="/" component={Home}/>
      <Route path="/status" component={OLTStatusView}/>
      <Route path="/rules" component={OLTRulesView}/>
    </div>
  </Router>
)
export default ThisBuildingRules