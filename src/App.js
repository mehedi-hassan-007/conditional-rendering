import React from 'react';
import Conditional_rendering from './components/conditional rendering/index';

import './App.css';
import List from './components/maping-data-with-unique-id/List';
import Index from './components/nested-maping/Index';
import Bootstrap from './components/reactbootstrap/Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import State from './components/state-setstate/State';
import Event_handler from './components/event-handler-class/Event-handler';
import Event_binding from './components/Event-binding/Event_binding';
import Dynamic_stylling from './components/dynamic-styling/dynamic_stylling';

function App() {
  return (
    <div className="App">
      <Conditional_rendering /> 
      <List />
      <Index />
      <Bootstrap />
      <State />
      <Event_handler />
      <Event_binding />
      <Dynamic_stylling />
    </div>
  );
}

export default App;
