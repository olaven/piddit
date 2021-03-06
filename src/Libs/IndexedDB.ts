/**
 * App specific wrapper for 'simple-indexeddb'
 */
import { createStore, get as getIndexedDB, getAll, put as putIndexedDB, remove as removeIndexedDB } from "simple-indexeddb";
import SavedSubreddit from "../Interfaces/Subreddit";

/**
 * Create stores for parts of app 
 */
export const create = {
    savedSubreddits : () => createStore("piddit", "savedSubreddits"),
    images : () => createStore("piddit", "images")
}

/**
 * Put data in stores
 */
export const put = {
    savedSubreddits : (
            data : any, 
            key : string, 
            callback : (result : any) => any
        ) => putIndexedDB("piddit", "savedSubreddits", data, key, callback), 
    images : (
        data : any, 
        key : string, 
        callback : (result : any) => any
    ) => putIndexedDB("piddit", "images", data, key, callback)
}

/**
 * Get data from stores
 */
export const get = {
    savedSubreddits : (id : any) => getIndexedDB(id, "savedSubreddits", "piddit"),
    images : (id : any) => getIndexedDB(id, "images", "piddit"),
    all : {
        savedSubreddits : () => getAll("savedSubreddits", "piddit"), 
        images : () => getAll("images", "piddit")
    }
}

/**
 * Remove data from store 
 */
export const remove = {
    savedSubreddit : (subreddit : SavedSubreddit) => {
        removeIndexedDB(subreddit.name, "savedSubreddits", "piddit", () => {}); 
    }
}
