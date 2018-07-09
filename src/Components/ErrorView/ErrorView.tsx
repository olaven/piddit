import * as React from "react";
// Interfaces 
import IErrorViewProps from "../../Interfaces/Props/IErrorViewProps"; 
import "./ErrorView.css";


class ImageView extends React.Component<IErrorViewProps> {
    public render() {
        return <div className="ErrorView">
            <img src={this.props.iamgeUrl || "/favicon.ico"} />
            <p>{this.props.message}</p>
        </div>;
    }
}

export default ImageView;
