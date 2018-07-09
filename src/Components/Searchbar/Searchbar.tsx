import * as React from "react";

import "./Searchbar.css";

// Interfaces 
import ISearchbarProps from "../../Interfaces/Props/ISearchBarProps"; 

class Searchbar extends React.Component<ISearchbarProps> {
    public render() {
        return <input 
                className={"Searchbar " + (this.props.visible ? "Searcbar-visible" : "Searchbar-hidden")}
                onInput={this.props.actionOnInput}
                placeholder={(this.props.placeholder ? this.props.placeholder : "enter text")}>
            
        </input>;
    }
}

export default Searchbar;
