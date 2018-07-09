import * as React from "react";

// Material UI 
import ListItemMU from '@material-ui/core/ListItem/ListItem'; 
import Button from "@material-ui/core/Button"; 
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MoodIcon from '@material-ui/icons/Mood'; 

// Interfaces 
import IListItemProps from '../../Interfaces/Props/IListItemProps'; 

export default class ListItem extends React.Component<IListItemProps> {
    public render() {
        return <ListItemMU onClick={this.props.onClicked}>
            <Button>
                <ListItemIcon>
                    <MoodIcon />
                </ListItemIcon>
                <ListItemText>
                    {this.props.name}
                </ListItemText>
            </Button>
        </ListItemMU>;
    }
}
