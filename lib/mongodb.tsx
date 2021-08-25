import { MongoClient, ObjectId, Collection, Document } from 'mongodb';

const URI =
  'mongodb://dinnerDB:a406010853@cluster0-shard-00-00.ajgqk.mongodb.net:27017,cluster0-shard-00-01.ajgqk.mongodb.net:27017,cluster0-shard-00-02.ajgqk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-up2idw-shard-0&authSource=admin&retryWrites=true&w=majority';

const DB_NAME = 'dinnerDB';
const COLLECTION_NAME_DISH_INFO = 'dish_info';
const COLLECTION_NAME_MENU = 'menu';
const COLLECTION_NAME_USER = 'user';

export const getCollection = async (dbName: string, collectionName: string): Promise<Collection<Document>> => {
  const client = await MongoClient.connect(URI);
  const db = await client.db(dbName);
  const collection = await db.collection(collectionName);

  return collection;
};

export const getUserList = async () => {
  const client = await MongoClient.connect(URI);
  const db = await client.db(DB_NAME);
  const collection = await db.collection(COLLECTION_NAME_USER);

  const userList = (await collection).find().toArray<UserGlobal.User>();

  return userList;
};

export const getUser = async (info: UserGlobal.User) => {
  const client = await MongoClient.connect(URI);
  const db = await client.db(DB_NAME);
  const collection = await db.collection(COLLECTION_NAME_USER);

  const { user_name: userName, password } = info;

  const user = (await collection).findOne<UserGlobal.User>({ user_name: userName, password }, { password: 0 });

  return user;
};

export const getMenu = async () => {
  const client = await MongoClient.connect(URI);
  const db = await client.db(DB_NAME);
  const collection = await db.collection(COLLECTION_NAME_MENU);

  const user = (await collection).find().toArray<MenuGlobal.Menu>();

  return user;
};

export const getDishInfo = async () => {
  const client = await MongoClient.connect(URI);
  const db = await client.db(DB_NAME);
  const collection = await db.collection(COLLECTION_NAME_DISH_INFO);

  const dishInfo = (await collection).find({}, { _id: 0 }).toArray<MenuGlobal.Dish>();

  return dishInfo;
};
