import express from 'express';
const router = express.Router();

let pupuk = [];

router.get('/', (req, res) => {
    res.json(pupuk);
});

router.post('/', (req, res) => {
    const newPupuk = {
        id: pupuk.length + 1,
        nama: req.body.nama,
        jenis: req.body.jenis,
        harga: req.body.harga
    };
    pupuk.push(newPupuk);
    res.status(201).json(newPupuk);
});

router.put('/:id', (req, res) => {
    const pupukId = parseInt(req.params.id);
    const pupukItem = pupuk.find(p => p.id === pupukId);

    if (!pupukItem) {
        return res.status(404).json({ message: 'Pupuk tidak ditemukan' });
    }

    pupukItem.nama = req.body.nama || pupukItem.nama;
    pupukItem.jenis = req.body.jenis || pupukItem.jenis;
    pupukItem.harga = req.body.harga || pupukItem.harga;

    res.status(200).json({
        message: `Pupuk dengan ID ${pupukId} telah diperbarui`,
        updatedPupuk: pupukItem
    });
});

router.delete('/:id', (req, res) => {
    const pupukId = parseInt(req.params.id); 
    const index = pupuk.findIndex(p => p.id === pupukId); 

    if (index === -1) {
        return res.status(404).json({ message: 'Pupuk tidak ditemukan' });
    }

    const deletedPupuk = pupuk.splice(index, 1); 
    res.status(200).json({
        message: `Pupuk dengan ID ${pupukId} telah dihapus`,
        deletedPupuk: deletedPupuk[0]
    });
});


export default router;