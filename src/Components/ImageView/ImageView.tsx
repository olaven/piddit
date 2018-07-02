import * as React from "react";
// Components 
import ImageBlock from '../ImageBlock/ImageBlock';
import "./ImageView.css";

// Material UI components
import IconButton from "@material-ui/core/IconButton/IconButton"; 
import AddIcon from "@material-ui/icons/Add";  





interface IImageViewProps {
            // source, alt 
    images : [string, string][]
}

class ImageView extends React.Component<IImageViewProps> {    
    public render() {
        return <div className="ImageView">
            {this.renderImages()}
            <IconButton className="AddIcon"> {/*Addicon not visible*/}
                <AddIcon/>
            </IconButton>
        </div>;
    }

    private renderImages() {
        return this.props.images.map(image => {
            return <div>
                <ImageBlock source={image[0]} alt={image[1]} key={image[0]} />
            </div>;
        })
    }
}

export default ImageView;
