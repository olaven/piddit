import * as React from "react";
import "./App.css";

// Components 
import ImageView from './Components/ImageView/ImageView'; 
import Sidebar from './Components/Sidebar/Sidebar'; 

interface IAppState {
  options: Array<{
    text: string,
    action: () => void
  }>; 
  images : [string, string][]
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
      ], 
      images : []
    }); 
  }

  public componentDidMount() {
    this.getImages("infrastructureporn", results => {
      this.setState({
        images : results
      })
    }); 
  }

  public render() {
    return <div>
        <Sidebar header="Options" options={this.state.options} />
        <ImageView images={this.state.images} />
      </div>;
  }

  /**
   * @param subreddit name of the subreddit to search. 
   * @param callback the callback for results. 
   */
  private getImages(subreddit : string, callback : (results : [string, string][]) => any) : any {
    
    let sources : [string, string][] = []; 

    fetch("https://www.reddit.com/r/" + subreddit + "/.json")
      .then(response => response.json().then(listing => {
        sources = this.getSources(listing.data.children); 
        callback(sources); 
      }))
      .catch(err => console.error(err));
  }

  /**
   * Turn the data-object from Reddit API into list of image sources 
   * Currently works for children nodes from {kind : "listing"} repsonse 
   * @param {object} children children nodes to get URLs from. 
   */
  private getSources(children : Array<any>) : [string, string][] {
    let sources : [string, string][] = []; 
    for(let child of children) {
      // only posts that are images and where url exists
      if(child.data.post_hint === "image" && typeof child.data.url === "string") {
        sources.push([child.data.url, child.data.title]); 
      }
    }
    return sources; 
  }
}

export default App;
