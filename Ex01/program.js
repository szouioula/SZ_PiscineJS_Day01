function firstDuplicateValue(array){
    let temp = [];
     for(let i = 0; i<array.length ; i++){
         if(temp.indexOf(array[i]) != -1){
             return array[i];
         }
         temp.push(array[i]);
         
     }
     return -1;
}
exports.firstDuplicateValue =  firstDuplicateValue;