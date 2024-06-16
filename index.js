const app = require('./app.js');

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Listening on port http://127.0.0.1:${PORT}`))