import * as React from "react";

import "./Searchbar.css";

interface ISearchbarProps {
    visible       : boolean, 
    actionOnInput?: (event: React.ChangeEvent<HTMLInputElement>) => any, 
    placeholder?  : string 
}

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
