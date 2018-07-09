import SavedSubreddit from "../SavedSubreddit";

export default interface ISidebarProps {
    visible: boolean;
    onButtonClick?: () => any;
    onListItemClick?: (event: React.MouseEvent<HTMLInputElement>) => any; 
    listItems?: SavedSubreddit[]; 
}
