import SavedSubreddit from '../Subreddit'; 

export default interface IAppState {
    savedSubreddits: SavedSubreddit[];
    currentSubreddit: SavedSubreddit
    drawerVisible: boolean;
    cornerAddButtonVisible: boolean; 
}