export default interface RedditListing {
    data : {
        children : {
            data : {
                post_hint : string;  
                url: string; 
                title?: string
            }
        }[]
    }
}