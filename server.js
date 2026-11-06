import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to StockEasy</h1>
        <p>Inventory Management System</p>
        <p>Coming Soon!</p>
    `);
});

app.listen(PORT, () => {
    console.log(`StockEasy running on port ${PORT}`);
});