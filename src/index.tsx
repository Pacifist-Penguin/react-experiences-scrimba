import React, { Component } from 'react';
import { render } from 'react-dom';
import HeaderContent from './components/HeaderContent/HeaderContent';
import MainContent from './components/MainContent/MainContent';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <>
        <HeaderContent />
        <MainContent />
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
