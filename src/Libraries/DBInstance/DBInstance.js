

/**
 * Returns an instance of the DB in browser. 
 * For normal CRUD-operatins, use other 
 * methods in this library
 * @throws If indexDB is not availble 
 */
/*
const getInstance = () => {
    if(!window.indexedDB) {
        throw "indexedDB is not available"; 
    }
    return window.indexedDB; 
} 
*/


/**
 * Add an item to the specified storename 
 * @param {string} storeName name of the store 
 * @param {any} data the data you wish to add 
 */
export function add(storeName, data){
    console.log("add kjørte"); 
}
