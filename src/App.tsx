import * as React from "react";
import "./App.css";

// Libraries 
import { getImages } from './Libs/reddit-image-search'; 

// Components 
import ImageView from './Components/ImageView/ImageView'; 
import ErrorView from './Components/ErrorView/ErrorView'; 
import Sidebar from './Components/Sidebar/Sidebar'; 
import Topbar from './Components/Topbar/Topbar'; 
import CornerAddButton from './Components/CornerAddButton/CornerAddButton'; 
//Interfaces 
import IAppState from './Interfaces/State/IAppState'; 

export default class App extends React.Component<{}, IAppState> {
constructor(props : {}) {
    super(props); 
}

public componentWillMount() {
    // synced with indexedDB later 
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

public render() {
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
        {this.state.errorPageVisible ? 
        <ErrorView message="Enter valid subreddit" /> : 
        <ImageView images={this.state.images} />}
        <CornerAddButton onPress={() => alert("adding")}/> 
    </div>
}

private clickSavedSubreddit(event : React.MouseEvent) {
    console.log(event.target instanceof HTMLButtonElement); 
    if(event.target instanceof Element) {
        const button = event.target as HTMLButtonElement; 
        this.displayImages(button.innerText); 
    }
}

/**
 * Takes the subreddit to be searched and renders 
 * imags accordingly
 * @param subreddit name of subreddit 
 * @returns void 
 */
private displayImages(subreddit : string) : void {
    getImages(subreddit, results => {
        this.setState({
            images: results,
            errorPageVisible: false
        });
    }).catch(() => {
        this.setState({
            errorPageVisible: true
        });
    });
} 


private inputChanged(event: React.ChangeEvent<HTMLInputElement>) {
    this.displayImages(event.target.value); 
}

private toggleDrawer() {
    this.setState({
    drawerVisible : !(this.state.drawerVisible)
    })
}
}
