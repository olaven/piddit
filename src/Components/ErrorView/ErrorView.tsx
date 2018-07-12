import * as React from "react";
// Material UI 
import BrokenImageIcon from '@material-ui/icons/BrokenImage'; 
import Typography from "@material-ui/core/Typography";
// Interfaces 
import IErrorViewProps from "../../Interfaces/Props/IErrorViewProps"; 
import "./ErrorView.css";


class ImageView extends React.Component<IErrorViewProps> {
    public render() {
        return <div className="ErrorView">
            <BrokenImageIcon className="ErrorView-Icon" fontSize="inherit"/>
            <Typography variant="display2">{this.props.message}</Typography>
        </div>;

    }
}

export default ImageView;
