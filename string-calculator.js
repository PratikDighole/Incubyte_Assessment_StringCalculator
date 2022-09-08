function StringCalculator() {

    
}


StringCalculator.prototype.add = function(string_numbers) {
    this.number = string_numbers ;
    if ( this.number.includes ( '-' ) ) {
        return "Negatives not allowed"  ;}
    
        numbers = this.number.replace ( /(\r\n|\n|\r)/gm , "," ) ;
    if (string_numbers == '') {
        return 0;
    }
     else if(string_numbers===1){
        return (parseInt(string_numbers));
     }
     else{
            var res = string_numbers.split (',') ;
            var total = 0 ;
            var arrayLength = res.length ;
              for ( var i = 0 ; i < res.length ; i ++ ) {
                if(res[i]<1000){
                    total = total + parseInt ( res [ i ] ) ;}
                else if (res[i]>='a' && res[i]<='z'){
                    var index=0;
                    var i=res[i].charCodeAt(index);
                    total = total +(i-96);
                }
              }
              return total ;
     }
};

module.exports=StringCalculator

