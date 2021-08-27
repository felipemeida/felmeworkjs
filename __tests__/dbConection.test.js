const db = require("../app/adapters/db");
test('DB connection', async () => {
    try {
        await db.authenticate();
        expect('db connected').toBe('db connected');
    } catch (error) {
        expect('db connected').toBe('db not connected');
    }
});