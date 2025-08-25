import { env } from "@/env";
import { MongoClient } from "mongodb";

const mongodbClient = new MongoClient(env.MONGODB_URL);

await mongodbClient.connect();

const mongoDb = mongodbClient.db(env.MONGODB_NAME);

const playerCollection = mongoDb.collection(env.MONGODB_PLAYER_COLLECTION);
const characterCollection = mongoDb.collection(
  env.MONGODB_CHARACTER_COLLECTION
);

export { playerCollection, characterCollection };
