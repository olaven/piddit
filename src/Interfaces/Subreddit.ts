import Image from "./Image";

export default interface SavedSubreddit {
    name : string; 
    icon? : string; 
    lastSync? : Date; 
    images?: Image[]; 
}