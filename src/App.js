import React, {useState}  from 'react';
import TestComponent from './components/molecules/TestComponent/TestComponent';
import { Component } from 'react';
import Button from '@material-ui/core/Button';

const App = props => {
  const [personsState, setPersonsSatate] = useState({
    persons: [
      {name: 'Wahyu', age: 28},
      {name: 'fatir', age: 14},
    ]
  });

  const switchNameHandler = () => {
    setPersonsSatate({
      persons: [
        {name: 'Wahyu Fatur Rizki', age: 28},
        {name: 'fatir fadhilah', age: 14},
      ]
    })
  }
  
    return (
      <div>
        <TestComponent title="src/App.js" />
        <Button onClick={switchNameHandler} variant="contained" color="primary">
          Switch Name
        </Button>
        <p>{personsState.persons[0].name} {personsState.persons[0].age}</p>
        <p>{personsState.persons[1].name} {personsState.persons[1].age}</p>
      </div>
    );
  
}

export default App;
