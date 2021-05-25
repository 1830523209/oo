
/** 
 * 

*@param{String} key

*/

function get(key){
    if(typeof key !=='string' )throw new Error('key must be string')
    return localStorage.getItem(key);
}
function set(){
    if(typeof key !=='string')throw new Error('params must be srting')
    
}
function clear(){

}

function remove(){
    localStorage.remove()
}