import * as React from "react";

import "./ErrorView.css";

interface IErrorViewProps {
    message : string, 
    iamgeUrl? : string
}

class ImageView extends React.Component<IErrorViewProps> {
    public render() {
        return <div className="ErrorView">
            <img src={this.props.iamgeUrl || "/favicon.ico"} />
            <p>{this.props.message}</p>
        </div>;
    }
}

export default ImageView;
