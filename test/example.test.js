import {add, subtract, product, divide} from '../util.js';

const test = QUnit.test;
  
test('it should return 2 when passed 1 and 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 =1;
    const argument2 =1;
    const expected = 2
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(argument1, argument2)

    expect.equal(actual, expected );

    //Expect
    // Make assertions about what is expected versus the actual result
    
});
test('it should return a 10 when passed a 16 and 6', (expect)=>{
    const argument1 = 16;
    const argument2 =6;
    const expected = 10;
    const actual= subtract(argument1, argument2);
    expect.equal(actual,expected);

});
test('it should return a 12 when passed a 3 and 4', (expect)=>{
    const argument1 = 4;
    const argument2 =4;
    const expected = 16;
    const actual =product(argument1, argument2);
    expect.equal(actual,expected);

});

test('it should return a 8 when passed a 16 and 2', (expect)=>{
    const argument1 = 16;
    const argument2 =2;
    const expected = 8;
    const actual =divide(argument1, argument2);
    expect.equal(actual,expected);


});
