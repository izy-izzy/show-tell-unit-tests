const makeMeANumber = require("./makeMeANumber");

it('should return number 42 for input 21', () => {
    expect(makeMeANumber(21)).toEqual(42);
});

it('should return number 1 for input 20', () => {
    expect(makeMeANumber(20)).toEqual(1);
});

it('should return number 0 for input 0', () => {
    expect(makeMeANumber(0)).toEqual(0);
});

it('should return number -2 for input -10', () => {
    expect(makeMeANumber(-10)).toEqual(-2);
});

it('should return number 0 for input undefined', () => {
    expect(makeMeANumber(undefined)).toEqual(0);
});

it('should return number 0 for input null', () => {
    expect(makeMeANumber(null)).toEqual(0);
});

it('should return number 0 for input type string', () => {
    expect(makeMeANumber('test')).toEqual(0);
});

it('should return number 0 for input NaN', () => {
    expect(makeMeANumber(NaN)).toEqual(0);
});

it('should return number 0 for input object', () => {
    expect(makeMeANumber({lol: true})).toEqual(0);
});

it('should return Infinity for input of 1.7976931348623157e+308', () => {
    expect(makeMeANumber(1.7976931348623157e+308)).toEqual(Infinity);
});

it('should return -1.1125369292536009e-307 for input of -1.7976931348623157e+308', () => {
    expect(makeMeANumber(-1.7976931348623157e+308)).toEqual(-1.1125369292536009e-307);
});