import express from 'express';
const router = express.Router();

const pupuk = [
    { nama: 'Urea', jenis: 'Kimia', harga: 100000 },
    { nama: 'Kompos', jenis: 'Organik', harga: 50000 },
    { nama: 'ZA', jenis: 'Kimia', harga: 75000 }
];

router.get('/', (req, res) => {
    res.json(pupuk);
});