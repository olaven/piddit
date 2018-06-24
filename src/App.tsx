import * as React from 'react';
import './App.css';

// Components 
import ImageView from './Components/ImageView/ImageView'


class App extends React.Component {
  public render() {
    return <div>
      <ImageView images={[["hei", "hei igjen"]]}/>
    </div>
  }
}

export default App;
