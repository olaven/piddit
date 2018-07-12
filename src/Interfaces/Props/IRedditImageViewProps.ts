import Subreddit from "../Subreddit";

export default interface IRedditImageViewProps {
    subreddit: Subreddit; 
    onValidSubreddit : () => any; 
    onInvalidSubreddit : () => any; 
}