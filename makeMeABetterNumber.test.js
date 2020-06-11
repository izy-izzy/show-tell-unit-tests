beforeEach(() => {
    jest.resetModules();
});

it('should return 5 for input of 5 ( mocked functions) ', () => {
    const mockedFn = jest.fn((x) => 1);
    jest.doMock('./makeMeANumber', () => {
        return mockedFn;
    })
    const makeMeABetterNumber = require("./makeMeABetterNumber");
    const a = makeMeABetterNumber(5);
    expect(a).toEqual(5);
    expect(mockedFn).toHaveBeenCalledWith(0);
    expect(mockedFn).toHaveBeenCalledWith(1);
    expect(mockedFn).toHaveBeenCalledWith(2);
    expect(mockedFn).toHaveBeenCalledWith(3);
    expect(mockedFn).toHaveBeenCalledWith(4);
    expect(mockedFn.mock.calls.length).toEqual(5);
});