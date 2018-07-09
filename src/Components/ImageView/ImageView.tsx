import * as React from "react";
// Components 
import ImageBlock from '../ImageBlock/ImageBlock';
import "./ImageView.css";
// Interfaces 
import IImageViewProps from "../../Interfaces/Props/IImageViewProps"; 
// Material UI components
import IconButton from "@material-ui/core/IconButton/IconButton"; 
import AddIcon from "@material-ui/icons/Add";  





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
        return this.props.images.map((image, index) => {    
            return <div>
                <ImageBlock source={image.url} alt={"image" || image.description} key={index} />
            </div>;
        })
    }
}

export default ImageView;
