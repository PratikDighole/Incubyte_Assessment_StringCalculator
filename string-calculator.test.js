const StringCalculator=require('./string-calculator')


describe("String Calculator",function(){
   var calculator;

   beforeEach(function(){
    calculator=new StringCalculator();
   })
   
   it("should return zero when '' is passed", function(){
    expect(calculator.add('')).toEqual(0)
   })

   it("should return one when 1 is passed", function(){
    expect(calculator.add(1)).toEqual(1)
   })
   it ( " should return the sum of the numbers if two are given " , function () {
    expect ( calculator.add ( '1,2' ) ) .toEqual(3) ;
   }) ;

   it ( " should return the sum of an unknown amount of numbers " , function ( ) {
    // creates a random array
    randomArray = ( length , max ) => [ ... new Array ( length ) ]
    .map ( ( ) => Math.round ( Math.random ( ) * max ) ) ;
    // creates a random number between 1 and 100
    randy = Math.floor ( ( Math.random ( ) * 100 ) + 1 ) ;
    res= randomArray ( randy , randy ) ;
    // sums up an array
    sum=res.reduce ( ( pv , cv ) => pv + cv , 0 ) ;
    // converts the array to a string
    arg = res.join ( ) ;
    expect ( calculator.add ( arg ) ) . toEqual ( sum ) ;
  } ) ;
           
})