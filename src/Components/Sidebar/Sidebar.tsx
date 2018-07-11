import * as React from 'react';

// Components 
import ListItem from '../ListItem/ListItem'

// Material UI 
import Drawer from '@material-ui/core/Drawer/Drawer';
import IconButton from "@material-ui/core/IconButton/IconButton";
import CloseIcon from "@material-ui/icons/Close";

// Interfaces 
import ISidebarProps from '../../Interfaces/Props/ISidebarProps'; 

class Sidebar extends React.Component<ISidebarProps> {

    public render() {
        return <Drawer open={this.props.visible}>
            <IconButton onClick={(this.props.onButtonClick ? this.props.onButtonClick.bind(this) : null)}>
                <CloseIcon />
            </IconButton>
            {this.renderListItems()}
        </Drawer>
    }

    /**
     * Renders the options of this sidebar
     */
    private renderListItems() {
        if(this.props.listItems) {
            return this.props.listItems.map((listItem, index) =>
                <ListItem
                    name={listItem.name}
                    onClicked={
                        (this.props.onListItemClick ? 
                            this.props.onListItemClick.bind(this) : null)
                    }
                    key={index}
                >
                </ListItem>
            )
        }
        return; 
    }
}

export default Sidebar;