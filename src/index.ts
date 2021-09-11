import * as express from 'express';
import { config } from 'dotenv';

config();

const app = express();
app.use(express.json());

app.use((req, res) => {
	res.end("ping");
});

app.listen(+process.env.PORT, () => {
	console.log(`Express app started at port ${process.env.PORT}`);
});