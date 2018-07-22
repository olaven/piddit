import * as React from "react";

// Material UI 
import ListItemMU from '@material-ui/core/ListItem/ListItem'; 
import Button from "@material-ui/core/Button"; 
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MoodIcon from '@material-ui/icons/Mood'; 
import DeleteIcon from "@material-ui/icons/Delete"; 


// Interfaces 
import IListItemProps from '../../Interfaces/Props/IListItemProps'; 

export default class ListItem extends React.Component<IListItemProps> {
    public render() {
        const subreddit = { name: this.props.name }

        return <ListItemMU>
            <Button onClick={() => this.props.onSelected(subreddit)}>
                <ListItemIcon>
                    <MoodIcon />
                </ListItemIcon>
                <ListItemText>
                    {this.props.name}
                </ListItemText>
            </Button>
            <ListItemIcon>
                <DeleteIcon onClick={() => this.props.onRemoved(subreddit)}/>
            </ListItemIcon>
        </ListItemMU>;
    }
}
