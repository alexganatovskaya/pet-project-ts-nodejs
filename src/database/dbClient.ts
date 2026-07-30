import { MongoClient, Db, Collection } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

export class DatabaseClient {
    private client: MongoClient;
    private db: Db | undefined;

    constructor() {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('Ups, db link is not found'); 
        } 
            
        this.client = new MongoClient(uri);
                   
    }

    async connect(): Promise<void> {
        try {
            await this.client.connect();
            this.db = this.client.db('weather_db');
            console.log('Success!');
        } catch (error) {
            console.error('Failed!');
            throw error;
        }
    }

    async disconnect(): Promise<void> {
        await this.client.close();
        console.log('Disconnected!');
    }

    getCollection(collectionName: string): Collection {
        if (!this.db) {
            throw new Error('Database is not initialized! Call connect() first.');
        }
        return this.db.collection(collectionName);
    }

}
