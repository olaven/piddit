import SavedSubreddit from "../Subreddit";

export default interface ISidebarProps {
    visible: boolean;
    onButtonClick: () => any;
    onListItemSelected: () => any; 
    onListItemRemoved: () => any; 
    listItems?: SavedSubreddit[]; 
}
