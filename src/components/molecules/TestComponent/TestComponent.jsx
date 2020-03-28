import React from 'react';
import '../../../App.css';
import ImageAvatar from '../../Atoms/ImageAvatar/ImageAvatar';
import MyAge from '../../Atoms/MyAge/MyAge';


const TestComponent = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>{props.title}</code> and save to reload.
        </p> */}
        <ImageAvatar />
        <MyAge />
        {/* <Button />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default TestComponent;
