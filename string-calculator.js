function StringCalculator() {

    
}


StringCalculator.prototype.add = function(string_numbers) {
    
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
                total = total + parseInt ( res [ i ] ) ;
              }
              return total ;
     }
};

module.exports=StringCalculator

