import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from './components/style/Container'
import routes from './routes/routes.config'

function App() {
  return (
    <Container>
      <Router>
        <Switch>
            {
              routes.map((route, index) => (
                <Route 
                  key={index}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              ))
            }
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
