import express from 'express';
import cors from 'cors'; 
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3001;
const app = express();

// CORS Headers
app.use(cors());
app.use(express.json());

// StreamChat client
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
const serverClient = StreamChat.getInstance(api_key, api_secret);

// Routes
app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, username, password } = req.body;
    const userId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createToken(userId);
    res.json({token, userId, firstName, lastName, username, hashedPassword})
  } catch (error) {
    res.json(error);
  }
})

app.post("/login")

// Start API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});