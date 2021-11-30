function pocketMoney(coins){
    let sumCoins=0;
    
    function compare(a,b)
    {
    	return a-b;
    }
    coins.sort(compare);
    for(let i=0; i<(coins.length -1); i++){
              if(coins[i]<=0){
                  return "vous avez pas d'argent !!";
              }
              sumCoins=sumCoins+coins[i];
    }
    return sumCoins+1;
}
    

exports.pocketMoney =  pocketMoney;