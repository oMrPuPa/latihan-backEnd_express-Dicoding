import express from "express";

const router = express.Router();

router.get('/', (_, res) => {
    res.send("Ini homepage");
});

router.get('/about', (_, res) => {
    res.send("Ini About page");
});

router.get('/hello{/:name}', (req, res) => {
    const username = req.params.name || 'stranger';
    const lang = req.query.lang;

    if (lang == 'id') {
        res.send(`Halo ${username}`);
    } else {
        res.send(`Hello ${username}`);
    };
});

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === 'Rafi' && password === '12345') {
        res.send(`Selamat Datang ${username}`);
    } else {
        res.send('Username/Password Invalid');
    };
});

router.all('/login', (_, res) => {
    res.status(405).send("Halaman tidak dapat diakses dengan method tersebut.");
})
router.all('/', (_, res) => {
    res.status(405).send("Halaman tidak dapat diakses dengan method tersebut.");
});

router.use((_, res) => {
    res.send("Halaman tidak ditemukan.");
});

export default router;