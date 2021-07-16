import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import TagsNeon from './components/TagsNeon';
import TagsPure from './components/TagsPure'
import PageBreakTest from './components/PageBreakTest'
import LineSheet from './components/LineSheet';

function App() {
  return (
    <Router>
    <Header />
    <main>
    <Container>
    <Switch>
     <Route path='/neon' component={TagsNeon} />
     <Route path='/pure' component={TagsPure} />
     <Route path='/page' component={PageBreakTest} />
     <Route path='/line' component={LineSheet} />
     <Route path='/' component={Home} exact />
     </Switch>
     </Container>
     </main>
    </Router>
  );
}

export default App;
