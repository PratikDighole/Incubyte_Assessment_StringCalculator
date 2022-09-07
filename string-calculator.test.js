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
})