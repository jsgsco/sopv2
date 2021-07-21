import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from './components/style/Container'
import Home from './components/pages/Home/Home'
import SignIn from './components/pages/Sign/SignIn'
import Error from './components/pages/Error/Error'
import ListReport from './components/pages/ListReport/ListReport'
import { AuthProvider } from './context/AuthContext'
import { SignProvider } from './context/SignContext'
import { PanelProvider } from './context/PanelContext'
import RoutePrivate from './components/RoutePrivate'


function App() {
  return (
    <AuthProvider>
      <SignProvider>
        <PanelProvider>
            <Container>
              <Router>
                <Switch>
                    <RoutePrivate path="/" exact>
                      <Home />
                    </RoutePrivate>
                    <Route path="/iniciar-sesion" component={SignIn} exact/>
                    <Route path="/lista-objetos" component={ListReport} exact/>
                    <Route path="/**" component={Error} exact/>
                </Switch>
              </Router>
            </Container>
        </PanelProvider>
      </SignProvider>
    </AuthProvider>
  );
}

export default App;
