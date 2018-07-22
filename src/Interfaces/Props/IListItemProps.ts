import SavedSubreddit from "../Subreddit";

export default interface IListItemProps{
    name : string; 
    onSelected: (subreddit : SavedSubreddit) => void;   
    onRemoved: (subreddit : SavedSubreddit) => void
}