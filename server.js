import { server, clapback, PORT } from "./initServer.js"

server.get('/', (req, res) => {
    res.send('🙋‍♂️ Hello...route /');
});

server.get('/frutas', (req, res) => {
    let frutas = clapback.get("/frutas")
    res.json(frutas)
});

server.listen(PORT, () => {
    console.log('Server is running on port '+PORT);
});