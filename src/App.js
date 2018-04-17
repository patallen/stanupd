import React from 'react';
import MainView from './containers/MainView';
import SideBar from './containers/SideBar';
import ContentView from './containers/ContentView';

class App extends React.Component {
  render() {
    return (
      <MainView>
        <SideBar />
        <ContentView />
      </MainView>
    );
  }
}

export default App;
