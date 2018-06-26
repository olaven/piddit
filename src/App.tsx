import * as React from 'react';
import './App.css';

// Components 
import ImageView from './Components/ImageView/ImageView'; 
import Sidebar from './Components/Sidebar/Sidebar'; 

interface IAppState {
  options: Array<{
    text: string,
    action: () => void
  }>
}

class App extends React.Component<{}, IAppState> {
  constructor(props : {}) {
    super(props); 
  }

  public componentWillMount() {
    this.setState({
      options : [
        {
          action: () => {alert("option 1 was clicked")}, 
          text : "option 1"
        }, 
        {
          action: () => {alert("option 2 was clicked")}, 
          text: "option 2"
        }
      ]
    })
  }

  public render() {
    return <div>
        <Sidebar header="Options" options={this.state.options} />
        <ImageView images={[["hei", "hei igjen"]]} />
      </div>;
  }
}

export default App;
