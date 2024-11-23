import express from 'express';
const router = express.Router();

let bibit = [];

router.get('/', (req, res) => {
    res.json(bibit);
});

export default router;