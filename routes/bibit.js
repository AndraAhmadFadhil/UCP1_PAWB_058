import express from 'express';
const router = express.Router();

let bibit = [];

router.get('/', (req, res) => {
    res.json(bibit);
});

router.post('/', (req, res) => {
    const newBibit = {
        id: bibit.length + 1,
        nama: req.body.nama, 
        jenis: req.body.jenis, 
        harga: req.body.harga 
    };
    bibit.push(newBibit);
    res.status(201).json(newBibit);
});

router.put('/:id', (req, res) => {
    const bibitId = parseInt(req.params.id);
    const bibitItem = bibit.find(b => b.id === bibitId);

    if (!bibitItem) {
        return res.status(404).json({ message: 'Bibit tidak ditemukan' });
    }

    bibitItem.nama = req.body.nama || bibitItem.nama;
    bibitItem.jenis = req.body.jenis || bibitItem.jenis;
    bibitItem.harga = req.body.harga || bibitItem.harga;

    res.status(200).json({
        message: `Bibit dengan ID ${bibitId} telah diperbarui`,
        updatedBibit: bibitItem
    });
});

router.delete('/:id', (req, res) => {
    const bibitId = parseInt(req.params.id); 
    const index = bibit.findIndex(b => b.id === bibitId); 

    if (index === -1) {
        return res.status(404).json({ message: 'Bibit tidak ditemukan' });
    }

    const deletedBibit = bibit.splice(index, 1); 
    res.status(200).json({
        message: `Bibit dengan ID ${bibitId} telah dihapus`,
        deletedBibit: deletedBibit[0]
    });
});

export default router;