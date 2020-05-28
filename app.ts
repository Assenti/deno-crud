import { opine, json, urlencoded, config } from "./deps.ts";
import routes from './router.ts';

const port = config().PORT;
const app = opine();

// Here we include all our middlewares as in Express.js
app.use(json());
app.use(urlencoded());
app.use('/api', routes);

app.listen(parseInt(port));
console.log(`App started on port ${port}`);