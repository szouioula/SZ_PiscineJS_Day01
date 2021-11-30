
function tabTriCarre(array){

    for(let i=0; i<array.length; i++){
        array[i]=array[i]*array[i];
    }
    function compare(a,b)
    {
    	return a-b;
    }
    array.sort(compare);
    return array;
}
    

exports.tabTriCarre =  tabTriCarre;