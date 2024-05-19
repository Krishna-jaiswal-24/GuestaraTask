import express from 'express'
import 'dotenv/config'
import connectDb from './db/index.js';
// Routing done here
import categoryRouter from "./routes/CategoryRoute.js";
import subCategoryRouter from "./routes/SubCategoryRoute.js";
import itemRouter from "./routes/ItemRoute.js";

const PORT = 8000
const app = express()
app.use(express.json());

// logger middleware
app.use((req, res, next) => {
	req.time = new Date(Date.now()).toString();
	console.log(req.method, req.hostname, req.path, req.time);
	next();
});
app.get('/', (req, res) => {
	res.send('Hello World')
})

connectDb()
	.then(app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	}))
	.catch((error) => {
		console.log("MONGO DB connection FAILED", error);
	});

app.use('/api/v1', categoryRouter);
app.use('/api/v1', subCategoryRouter);
app.use('/api/v1', itemRouter);