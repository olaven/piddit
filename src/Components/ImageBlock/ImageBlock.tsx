import * as React from "react";

interface IImageBlockProps {
    source : string, 
    alt : string
}

class ImageView extends React.Component<IImageBlockProps> {
    public render() {        
        return <img className="ImageBlock" src={this.props.source} alt={this.props.alt}/>
    }
}

export default ImageView;
