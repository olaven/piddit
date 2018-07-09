import SavedSubreddit from '../SavedSubreddit'; 
import Image from '../Image'; 

export default interface IAppState {
    savedSubreddits: SavedSubreddit[];
    images: Image[],
    errorPageVisible: boolean,
    drawerVisible: boolean;
    online: boolean;
}