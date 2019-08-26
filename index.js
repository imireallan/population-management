import dotenv from "dotenv";
import app from "./app/index";
import databaseConnection from "./app/utils/databaseConnection";

dotenv.config();

// databaseConnection(process.env.MONGODB_URI);
databaseConnection(
  "mongodb+srv://allan:m0zillafirefox@population-mgt-luioo.mongodb.net/population?retryWrites=true&w=majority"
);

// listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
