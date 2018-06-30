import * as React from "react";
import "./App.css";

// Components 
import ImageView from './Components/ImageView/ImageView'; 
import ErrorView from './Components/ErrorView/ErrorView'; 
import Searchbar from './Components/Searchbar/Searchbar'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import Sidebar from './Components/Sidebar/Sidebar'; 

interface IAppState {
  options: Array<{
    text: string,
    action: () => void
  }>; 
  images : [string, string][], 
  errorPageVisible : boolean, 
  searchVisible : boolean; 
  online : boolean; 
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
      images : [

      ], 
      errorPageVisible : true,
      searchVisible : false, 
      online : navigator.onLine
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
        <ImageView images={this.state.images} />};
    </div>

    return <div className="App">
        {/*<Sidebar header="Options" options={this.state.options} /> */}
        <div onClick={this.toggleSearch.bind(this)}>
          <FontAwesomeIcon icon={faSearch} 
            className={"faSearch " 
                        + (this.state.searchVisible ? "faSearch-active" : "faSearch-inactive")} 
          />
        </div>
        <Searchbar 
          visible={this.state.searchVisible} 
          actionOnInput={this.inputChanged.bind(this)}
          placeholder="enter subreddit"/>
        {mainView}
      </div>;
  }

  /**
   * @param subreddit name of the subreddit to search. 
   * @param callback the callback for results. 
   */
  private getImages(subreddit : string, callback : (results : [string, string][]) => any) : any {
    
    let sources : [string, string][] = []; 

    return fetch("https://www.reddit.com/r/" + subreddit + "/.json?count=205").then(
      response =>
        response.json().then(listing => {
          sources = this.getSources(listing.data.children);
          callback(sources);
        })
    );
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

  private toggleSearch() {
    this.setState({
      searchVisible : !this.state.searchVisible
    })
  }

  private handleNetworkChange() {
    this.setState({
      online : navigator.onLine
    }); 
  }
}

export default App;
