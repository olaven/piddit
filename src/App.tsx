import * as React from "react";
import "./App.css";

// Components 
import ImageView from './Components/ImageView/ImageView'; 
import ErrorView from './Components/ErrorView/ErrorView'; 
import Sidebar from './Components/Sidebar/Sidebar'; 
import Topbar from './Components/Topbar/Topbar'; 
//Interfaces 
import Image from './Interfaces/Image'; 
import IAppState from './Interfaces/State/IAppState'; 

export default class App extends React.Component<{}, IAppState> {
  constructor(props : {}) {
    super(props); 
  }

  public componentWillMount() {
    this.setState({
      savedSubreddits: [
        {
          name: "bridges",
          icon: "bridgeicon"
        },
        {
          name: "trainporn",
          icon: "trainpornicon"
        }
      ], 
      images : []
    });
  }

  public componentDidMount() {
    window.addEventListener("online", this.handleNetworkChange)
    window.addEventListener("offline", this.handleNetworkChange)
  }

  public render() {
    let mainView: JSX.Element = <div>
      {this.state.errorPageVisible ? 
        <ErrorView message="Enter valid subreddit" />: 
        <ImageView images={this.state.images}/>};
    </div>

    return <div className="App">
        <Topbar 
          onButtonClick={this.toggleDrawer.bind(this)}
          input={{placeholder : "enter subreddit", onInput : this.inputChanged.bind(this)}}
        ></Topbar>
        <Sidebar 
          visible={this.state.drawerVisible} 
          onButtonClick={this.toggleDrawer.bind(this)}
          listItems={this.state.savedSubreddits} 
          onListItemClick={this.clickSavedSubreddit.bind(this)}
        />         
        {mainView}
      </div>
  }

  private clickSavedSubreddit(event: React.MouseEvent<HTMLInputElement>) {
    console.log(event.target); 
    // temp. solution 
    /**
     * A lot of the logic in this class could be separated out to a small library. 
     * Looking up things on reddit should be 
     *  1. in another file 
     *  2. not tied to input anymore (to call it from this method as well)
     */
  }

  /**
   * @param subreddit name of the subreddit to search. 
   * @param callback the callback for results. 
   */
  private getImages(subreddit : string, callback : (results : Image[]) => any) : any {
    
    let sources : Image[] = []; 

    return fetch("https://www.reddit.com/r/" + subreddit + "/.json?count=205").then(
      response =>
        response.json().then(listing => {
          sources = this.getSources(listing.data.children);
          console.log(sources); 
          callback(sources);
        })
    );
  }

  /**
   * Turn the data-object from Reddit API into list of image sources 
   * Currently works for children nodes from {kind : "listing"} repsonse 
   * @param {object} children children nodes to get URLs from. 
   */
  private getSources(children : Array<any>) : Image[] {
    let sources : Image[] = []; 
    for(let child of children) {
      // only posts that are images and where url exists
      if(child.data.post_hint === "image" && typeof child.data.url === "string") {
        sources.push({url : child.data.url, title : child.data.title})
      }
    }
    return sources; 
  }

  private inputChanged(event: React.ChangeEvent<HTMLInputElement>) {
    this.getImages(event.target.value, results => {
      this.setState({
        images: results, 
        errorPageVisible : false 
      })
    }).catch(()=> {
      this.setState({
        errorPageVisible : true
      })
    }); 
  }

  private toggleDrawer() {
    this.setState({
      drawerVisible : !(this.state.drawerVisible)
    })
  }

  private handleNetworkChange() {
    this.setState({
      online : navigator.onLine
    }); 
  }
}
