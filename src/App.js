import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notfound/NotFound';
import Articles from './pages/articles/Articles';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
