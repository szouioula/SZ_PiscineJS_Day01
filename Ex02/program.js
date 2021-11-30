function pocketMoney(coins){
    let sumCoins=0;
    
    function compare(a,b)
    {
    	return a-b;
    }
    coins.sort(compare);
    for(let i=0; i<(coins.length -1); i++){
        if(coins[i]<0){
            return 1;
        }
        sumCoins=sumCoins+coins[i];
    }
    if(sumCoins==coins[coins.length-1] || sumCoins+1 == coins[coins.length-1]){
        return sumCoins+coins[coins.length-1]+1;
    }else if(sumCoins<coins[coins.length-1]){
        return sumCoins+1;
    }else if(sumCoins>coins[coins.length-1]){
     	return sumCoins+coins[coins.length-1]+1;
    }
    
} 

exports.pocketMoney =  pocketMoney;