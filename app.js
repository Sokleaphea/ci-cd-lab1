import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.status(200).send('Hello, GitHub Actions!');
});
app.get('/', (req, res) => {
    res.status(200).send('Health, OK!')
})
export default app;