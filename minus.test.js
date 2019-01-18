const minus = require('./minus')

// 1 - 1 เท่ากับ 0
test('1 - 1 เท่ากับ 0', () =>{
    expect(minus(1,1)).toBe(0);
});

// 10 - 5 เท่ากับ 5
test('10 - 5 เท่ากับ 5', () => {
    expect(minus(10,5)).toBe(5);
});

// 20 - 3 เท่ากับ 17
test('20 - 3 เท่ากับ 17', () => {
    expect(minus(20,3)).toBe(17);
});

// 20 - 7 เท่ากับ 13
test('20 - 7 เท่ากับ 13', ( ) =>{
    expect(minus(20,7)).toBe(13);
});

// 30 - 7 เท่ากับ 23
test('30 - 7 เท่ากับ 23', () =>{
    expect(minus(30,7)).toBe(23);
});
