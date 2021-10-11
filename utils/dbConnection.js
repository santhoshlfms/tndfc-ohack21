import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if(connection.isConnected) {
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        connection.isConnected = db.connections[0].readyState;
        console.log("MongoDb connected ..")
    }catch(e) {
        console.log("MongoDB connection failed ! ", e)
    }
    
}

export default dbConnect;