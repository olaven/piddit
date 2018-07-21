import * as React from 'react';
// Material UI 
import AppBar from '@material-ui/core/AppBar/AppBar';
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu"; 
import TextField from '@material-ui/core/TextField'; 
// Interfaces 
import ITopbarProps from "../../Interfaces/Props/ITopbarProps"; 
// Styles 
import './Topbar.css'; 


export default class Topbar extends React.Component<ITopbarProps> {
    public render() {
        return <AppBar className="Topbar">
            <IconButton onClick={this.props.onButtonClick}>
                <MenuIcon />
            </IconButton>
            <TextField 
                className="Topbar-Input"
                onChange={this.props.input.onInput} 
                placeholder={this.props.input.placeholder || ""} />
        </AppBar>
    }
}


