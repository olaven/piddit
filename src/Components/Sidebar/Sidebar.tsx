import * as React from 'react';
// Material UI 
import Drawer from '@material-ui/core/Drawer/Drawer';
import IconButton from "@material-ui/core/IconButton/IconButton"; 
import CloseIcon from "@material-ui/icons/Close";  


interface ISidebarProps {
    visible : boolean; 
    onButtonClick : () => any; 
    listItems : any[]; 
}

class Sidebar extends React.Component<ISidebarProps> {
    
    public render() {
        return <Drawer open={this.props.visible}>
            <IconButton onClick={this.props.onButtonClick.bind(this)}>
                <CloseIcon />
            </IconButton>
            {this.renderOptions()}
        </Drawer>
    }

    /**
     * Renders the options of this sidebar
     */
    private renderOptions() {
        return this.props.listItems.map((savedSubreddit, index) => 
            <div className="option" key={index}>
                <img src={savedSubreddit.icon} alt={ ""/*"icon of " + savedSubreddit.name */} />
                {savedSubreddit.name}
            </div>
        )
    }
}

export default Sidebar;
