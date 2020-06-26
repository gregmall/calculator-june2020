import {add, subtract, product, divide} from '../util.js';

const test = QUnit.test;
  
test('it should return 5 when passed 2 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 =2;
    const argument2 =3;
    const expected = 5
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(argument1, argument2)

    expect.equal(actual, expected );

    //Expect
    // Make assertions about what is expected versus the actual result
    
});
test('it should return a 5 when passed a 12 and 7', (expect)=>{
    const argument1 = 12;
    const argument2 =7;
    const expected = 5;
    const actual= subtract(argument1, argument2);
    expect.equal(actual,expected);

});
test('it should return a 8 when passed a 2 and 4', (expect)=>{
    const argument1 = 2;
    const argument2 =4;
    const expected = 8;
    const actual =product(argument1, argument2);
    expect.equal(actual,expected);

});

test('it should return a 2 when passed a 12 and 6', (expect)=>{
    const argument1 = 12;
    const argument2 =6;
    const expected = 2;
    const actual =divide(argument1, argument2);
    expect.equal(actual,expected);


});
