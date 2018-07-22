import SavedSubreddit from "../Subreddit";

export default interface ISidebarProps {
    visible: boolean;
    onButtonClick: () => any;
    onListItemSelected: (subreddit : SavedSubreddit) => any; 
    onListItemRemoved: (subreddit: SavedSubreddit) => any; 
    listItems: SavedSubreddit[]; 
}
