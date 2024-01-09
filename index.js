function prime(a){
    var count = 0
    for(var i = 1 ; i <= a; i++){
        if(a % i == 0){
            count++
        }
    }
    if(count == 1){
        console.log("PRIME")
    }
    else{
        console.log("Not prime")
    }
}