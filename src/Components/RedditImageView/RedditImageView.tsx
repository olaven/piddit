import * as React from "react";


// Libraries 
import { getImages } from '../../Libs/reddit-image-search'; 
// Components 
import ImageView from '../ImageView/ImageView'; 
import ErrorView from '../ErrorView/ErrorView'; 
// Interfaces 
import IRedditImageViewProps from "../../Interfaces/Props/IRedditImageViewProps"; 
import IRedditImageViewState from "../../Interfaces/State/IRedditImageViewState"; 



export default class RedditImageView extends React.Component<IRedditImageViewProps, IRedditImageViewState> {

    constructor(props : IRedditImageViewProps) {
        super(props);
        this.state = {
            imagesAvaiable : false, 
            images : []
        } 
    }

    public render() {
        return this.state.imagesAvaiable ? 
            <ImageView images={this.state.images}/> : 
            <ErrorView message="Invalid Subreddit" /> 
    }

    componentDidUpdate() {
        if(this.props.subreddit) {
            this.displayImages(this.props.subreddit.name); 
        }
    }

    /**
 * Takes the subreddit to be searched and renders 
 * imags accordingly
 * @param subreddit name of subreddit 
 * @returns void 
 */
    private displayImages(subreddit: string): void {
        getImages(subreddit, results => {
            this.setState({
                images : results, 
                imagesAvaiable : true
            }); 
            this.props.onValidSubreddit(); 
        }).catch(() => {
            this.setState({
                imagesAvaiable : false
            }); 
            this.props.onInvalidSubreddit(); 
        }); 
    } 
}

