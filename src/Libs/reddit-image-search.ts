import Image from '../Interfaces/Image'; 
import RedditListing from '../Interfaces/RedditListing'; 

/**
 * @param subreddit name of the subreddit to search. 
 * @param callback the callback for results. 
*/
export const getImages = (subreddit : string, 
    callback : (results : Image[]) => any) => {
    
    return fetch("https://www.reddit.com/r/" + subreddit + "/.json?count=205").then(
        response => response.json().then(listing => {
            let images = getImagePostsFromListing(listing); 
            callback(images); 
        })
    );

}

/**
 * Filter out non-image posts from a subreddit listing 
 * @param listing the listing to filter 
 * @returns new listing with image-posts only 
 */
const getImagePostsFromListing = (listing: RedditListing) : Image[] => {
    let images : Image[] = []; 
    let children = listing.data.children; 

    children.map(child => {
        if (child.data.post_hint === "image" && typeof child.data.url === "string") {
            images.push({
                url : child.data.url, 
                title : child.data.title
                // description later
            })
        }
    })

    return images; 
}


