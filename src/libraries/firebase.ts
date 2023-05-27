import {App, cert, initializeApp} from 'firebase-admin/app';
import {getAuth} from 'firebase-admin/auth';
import {DecodedIdToken} from "firebase-admin/lib/auth/token-verifier";

export class Firebase {
    private app: App;

    constructor() {
        this.app = initializeApp({
            credential: cert(JSON.parse(process.env.firebase_oauth_json || "{}")),
        });
    }

    public async verifyIdToken(token: string): Promise<DecodedIdToken> {
        try {
            const decoded: DecodedIdToken = await getAuth().verifyIdToken(token);
            return decoded;
        } catch (error) {
            throw error;
        }
    }


}





