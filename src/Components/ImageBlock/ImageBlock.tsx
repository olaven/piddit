import * as React from "react";

// Interfaces 
import IImageBlockProps from '../../Interfaces/Props/IImageBlockProps'; 

class ImageView extends React.Component<IImageBlockProps> {
    public render() {        
        return <img className="ImageBlock" src={this.props.source} alt={this.props.alt}/>
    }
}

export default ImageView;
