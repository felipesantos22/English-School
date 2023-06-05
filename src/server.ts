import 'dotenv/config'
import app from './app';

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Api rodando na porta ${PORT}!`));
