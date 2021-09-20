import './App.css';
import useDarkMode from './useDarkMode';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/contact/Contact';
// import NotFound from './pages/notfound/NotFound';


function App() {

  useDarkMode()

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;