import mongoose from "mongoose";

let connection = {}; // Global connection object

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      // console.log("Already connected to DB");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;

    if (connection.isConnected) {
      console.log("New connection to DB established");
    }
  } catch (error) {
    console.error("Error connecting to DB:", error.message);
    throw new Error("Database connection failed");
  }
};
