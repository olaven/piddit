import * as React from 'react';
// Material UI 
import AppBar from '@material-ui/core/AppBar/AppBar';
import Input from "@material-ui/core/Input/Input";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu"; 

// Interfaces 
import ITopbarProps from "../../Interfaces/Props/ITopbarProps"; 



export default class Topbar extends React.Component<ITopbarProps> {
    public render() {
        return <AppBar>
            <IconButton onClick={this.props.onButtonClick}>
                {/*ADD CSS TO SPACE THESE PARTS OUT*/}
                <MenuIcon />
            </IconButton>
            <Input 
                onChange={this.props.input.onInput} 
                placeholder={this.props.input.placeholder || ""} 
                style={{backgroundColor: "whitesmoke"}}/>
        </AppBar>
    }
}


