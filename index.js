import "dotenv/config"

import app from "./src/app.js"
import { connectDatabase } from "./src/config/database.js";

const PORT = process.env.PORT || 3000;
const URI = process.env.URI || "mongodb://127.0.0.1:27017/contactbook";

await connectDatabase(URI);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})