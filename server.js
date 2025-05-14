import { server, db, PORT } from "./initServer.js"

server.get('/', (req, res) => {
    res.send('🙋‍♂️ Hello...route /');
});

server.get('/frutas', (req, res) => {
    let frutas = db.get("/frutas")
    res.status(200).json(frutas)
});

server.post('/frutas', (req, res) => {
    let id = db.newID("FRUTA-")
    let data = { id, ...req.body }
    db.set("/frutas/"+data.id, data)
    res.status(200).json({ msg: "Inserção ok.", data })
});

server.listen(PORT, () => {
    console.log('Server is running on port '+PORT);
});