let n = 9;
let ar = [10,20,20,10,10,30,50,10,20];
 // The function is expected to return an INTEGER

function sockMerchant(n, ar) {
    let numberOfPairs = 0;
    let pairs = {};
     ar.forEach((socks) => {
        if(!pairs[socks]){
            pairs[socks] = 0;
        }

        pairs[socks] = pairs[socks] + 1

        if(!(pairs[socks] % 2)){
            numberOfPairs = numberOfPairs + 1
        }
    });
    return numberOfPairs;
}
   
console.log(sockMerchant(n,ar));