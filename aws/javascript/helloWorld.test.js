const {handler} = require('./helloWorld.js');

test('says hi', () => {
    expect(handler()).toStrictEqual({
        statusCode: 200,
        body: "Hello world",
    });
});