const StringCalculator=require('./string-calculator')


describe("String Calculator",function(){
   var calculator;

   beforeEach(function(){
    calculator=new StringCalculator();
   })
   
   it("should return zero when '' is passed", function(){
    expect(calculator.add('')).toEqual(0);
   })
   
   it("should return integer when string length is 1",()=>{
    expect(calculator.add('1')).toEqual(1);
   })

   it("should add two integers if string contains two integers",()=>{
    expect(calculator.add('1,2')).toEqual(3);
   })
   
   it("should add all integers the string contains ",()=>{
    expect(calculator.add('1,2,3,4')).toEqual(10);
   })
   
   it("should add all integers the string contains ",()=>{
    expect(calculator.add('1,2,3,4,5,10,15,60')).toEqual(100);
   })

   it("should add all integers the string contains ",()=>{
    expect(calculator.add('123,110')).toEqual(233);
   })

   it("should add all integers the string contains ",()=>{
    expect(calculator.add('145,110,340,230,300')).toEqual(1125);

  })

 it("should ignore more than 1000 ",()=>{
   expect(calculator.add('10,1000')).toEqual(10);
  })
  it("negative ",()=>{
    expect(calculator.add('10,-1')).toEqual("Negatives not allowed")
  })
  it("should add all char the string contains",()=>{
    expect(calculator.add("1,1,b")).toEqual(4);
  })
})