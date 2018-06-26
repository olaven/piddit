import * as React from "react";
// Components 
import ImageBlock from '../ImageBlock/ImageBlock';
import "./ImageView.css";




interface IImageViewProps {
            // source, alt 
    images : [string, string][]
}

class ImageView extends React.Component<IImageViewProps> {    
    public render() {
        return <div className="ImageView">
            {this.renderImages()}
        </div>;
    }

    private renderImages() {
        return this.props.images.map(image => {
            return <div>
                <h1>Bilde</h1>
                <ImageBlock source={image[0]} alt={image[1]} key={image[0]} />
            </div>;
        })
    }
}

export default ImageView;
