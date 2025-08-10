import { MongoClient } from "mongodb";
const mongo_url="mongodb+srv://Complaints:Complaints@cluster0.opxmnf0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(mongo_url)


export async function connectToMongo() {
    try {
        await client.connect()
        console.log('connectet to DB');
    } catch (error) {
        console.log(error);
    }
}
connectToMongo()
const database = client.db("Complaints")
export default database