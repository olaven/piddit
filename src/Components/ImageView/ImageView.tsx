import * as React from "react";

import "./ImageView.css";


// Components 
import ImageBlock from '../ImageBlock/ImageBlock'

interface IImageViewProps {
            // source, alt 
    images : [[string, string]]
}

class ImageView extends React.Component<IImageViewProps> {
    
    public render() {
        return <div className="ImageView">
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
        </div>;
    }
}

export default ImageView;
