import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team-matches/:id" component={TeamMatches} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
