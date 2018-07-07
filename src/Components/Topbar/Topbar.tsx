import * as React from 'react';
// Material UI 
import AppBar from '@material-ui/core/AppBar/AppBar';
import Input from "@material-ui/core/Input/Input";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu"; 
// Interfaces 
import InputInfo from '../../Interfaces/InputInfo'


interface ITopbarProps {
    onButtonClick : () => any; 
    input : InputInfo; 
}

class Topbar extends React.Component<ITopbarProps> {
    public render() {
        return <AppBar>
            <IconButton onClick={this.props.onButtonClick}>
                {/*ADD CSS TO SPACE THESE PARTS OUT*/}
                <MenuIcon />
                <Input onChange={this.props.input.onInput} placeholder={this.props.input.placeholder || ""} />
            </IconButton>
        </AppBar>
    }
}

export default Topbar;
