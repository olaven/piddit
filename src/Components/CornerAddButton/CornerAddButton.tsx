import * as React from "react";

// Material UI 
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';

// Interfaces 
import ICornerAddButtonProps from '../../Interfaces/Props/ICornerAddButtonProps';



export default class CornerAddButton extends React.Component<ICornerAddButtonProps> {
    public render() {
        return <Button 
            variant="fab" 
            className="CornerAddButton"
            color="secondary"
            style={styles}> 
            <AddIcon /> 
        </Button>
    }
}

const styles: React.CSSProperties = {
    position : "fixed", 
    right: "5vw", 
    bottom: "5vh"
}