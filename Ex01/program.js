function firstDuplicateValue(array){

    for (let i=0; i<array.length; i++){
        if(array[i]<=0){
            return "votre tableau contient des valeurs nulles ou négatives";
        }
        
         for (let j=i+1; j< array.length; j++) {
         let cpt=0;
            if(array[i]==array[j]){
            	cpt++;
              return array[i];
            }
           
         }
        
    }
}
    

exports.firstDuplicateValue =  firstDuplicateValue;