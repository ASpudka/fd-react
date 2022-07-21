import React from 'react';
import Ciao from './components/ciao/ciao'
import './App.css';
import MyLink from './components/myLink';

function App() {
  const user = {
    id : 1,
    firstName: 'Elon',
    LastName: "Musk"
  }
  return (<React.Fragment>
    <h1 className = 'heading' title ='react'>Hi!</h1>
    <Ciao fname = 'Alex' sname = 'Asdf' />
    <Ciao fname = 'Masha'/>
    <Ciao fname = { user.firstName}/>
    <MyLink className = 'my-link' href='#'/>
    </React.Fragment>)
}

export default App;
