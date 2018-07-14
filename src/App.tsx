import * as React from "react";
import "./App.css";

// Components  
import RedditImageView from "./Components/RedditImageView/RedditImageView";
import Sidebar from './Components/Sidebar/Sidebar'; 
import Topbar from './Components/Topbar/Topbar'; 
import CornerAddButton from './Components/CornerAddButton/CornerAddButton'; 
// Libs
import { createStore, getAll, put } from 'simple-indexeddb';  
// Material UI 
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import MUITheme from './Libs/MUITheme'; 
//Interfaces 
import IAppState from './Interfaces/State/IAppState'; 
import Subreddit from "./Interfaces/Subreddit";

export default class App extends React.Component<{}, IAppState> {
    
constructor(props : {}) {
    super(props); 
    this.state = {
        savedSubreddits: [],
        currentSubreddit: {name : ""}, 
        drawerVisible: false, 
        cornerAddButtonVisible: false 
    }
}

public componentDidMount() {
    createStore("piddit", "savedSubreddits");  
    getAll("savedSubreddits", "piddit").then(result => {
        console.log("fetched: ", result); 
        let id = "anId" + Math.random();
        put("piddit", "savedSubreddits", {id : id, data : "some data wow"}, "id", () => {})
    }); 
}

public render() {
    return <div className="App">
        <MuiThemeProvider theme={MUITheme}>
            <Topbar
                onButtonClick={this.toggleDrawer.bind(this)}
                input={{ placeholder: "enter subreddit", onInput: this.inputChanged.bind(this) }}
            ></Topbar>
            <Sidebar
                visible={this.state.drawerVisible}
                onButtonClick={this.toggleDrawer.bind(this)}
                listItems={this.state.savedSubreddits}
                onListItemClick={this.clickSavedSubreddit.bind(this)}
            />
            <RedditImageView
                subreddit={this.state.currentSubreddit}
                onValidSubreddit={() => this.setState({ cornerAddButtonVisible: true })}
                onInvalidSubreddit={() => this.setState({ cornerAddButtonVisible: false })} />
            {this.state.cornerAddButtonVisible ? <CornerAddButton onPress={() =>
                this.saveSubreddit(this.state.currentSubreddit)} /> : null}
        </MuiThemeProvider>
    </div>
}

/**
 * Adds a saved subreddit 
 * @param subreddit to be added
 */
private saveSubreddit = (subreddit : Subreddit) => {
    this.setState({
        savedSubreddits : this.state.savedSubreddits.concat(subreddit)
    }); 
}

private clickSavedSubreddit(event : React.MouseEvent) {
    if(event.target instanceof Element) {
        const button = event.target as HTMLButtonElement; 
        this.setState({
            currentSubreddit : {name : button.innerText}
        })
    }
}

private inputChanged(event : React.ChangeEvent<HTMLInputElement>) {
    this.setState({currentSubreddit : {name : event.target.value}}); 
}

private toggleDrawer() {
    this.setState({
        drawerVisible : !(this.state.drawerVisible)
    })
}
}
