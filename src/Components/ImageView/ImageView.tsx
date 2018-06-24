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
        return <div className="ImageView-column">
            {/*
                div column 
                    div row 
                        x img 
                    div row 
                        x img 
            */}
            <div className=".ImageView-row">
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" /> <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" /> <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            </div>
            <div className=".ImageView-row ">
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" /> <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" /> <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            </div>
            <div className=".ImageView-row ">
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" /> <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" /> <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
                <ImageBlock source="https://i.imgur.com/dnSlUkv.jpg" alt="Image of train" />
            </div>
        </div>;
    }
}

export default ImageView;
