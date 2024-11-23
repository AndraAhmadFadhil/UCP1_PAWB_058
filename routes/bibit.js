import express from 'express';
const router = express.Router();

const bibit = [
    { nama: 'Padi', jenis: 'Unggul', harga: 20000 },
    { nama: 'Jagung', jenis: 'Hibrida', harga: 15000 },
    { nama: 'Kedelai', jenis: 'Lokal', harga: 18000 }
];

router.get('/', (req, res) => {
    res.json(bibit);
});

export default router;