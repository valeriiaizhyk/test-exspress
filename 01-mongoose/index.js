import mongoose from "mongoose";

const DB_URI = `mongodb+srv://snakelera:sXuU8Qh4dP2f80fu@cluster0.ee5ahsr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

async function run() {
  try {
    await mongoose.connect(DB_URI);

    console.info("Database connection successfully");
  } finally {
    await mongoose.disconnect();
  }
}

run().catch((error) => console.error(error));
