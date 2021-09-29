const db = require("../app/database/db");
test('DB connection', async () => {
    try {
        await db.authenticate();
        expect('db connected').toBe('db connected');
    } catch (error) {
        expect('db connected').toBe('db not connected');
    }
});