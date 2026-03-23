const repeatString = function(a,b) {
    if(b<0){
        return "ERROR"
    }
    let out="";
    for(i=0;i<b;i++){

        out+=a
    };
    return out;
    

};

// Do not edit below this line
module.exports = repeatString;
