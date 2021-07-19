import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from './components/style/Container'
import Home from './components/pages/Home/Home'
import Sign from './components/pages/Sign/Sign'
import Error from './components/pages/Error/Error'
import { AuthProvider } from './context/AuthContext'
import RoutePrivate from './components/RoutePrivate'


function App() {
  return (
    <AuthProvider>
        <Container>
          <Router>
            <Switch>
                <RoutePrivate path="/" exact>
                  <Home />
                </RoutePrivate>
                <Route path="/sign" component={Sign} exact/>
                <Route path="/**" component={Error} exact/>
            </Switch>
          </Router>
        </Container>
    </AuthProvider>
  );
}

export default App;
