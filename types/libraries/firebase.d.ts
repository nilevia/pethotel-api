import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
export declare class Firebase {
    private app;
    constructor();
    verifyIdToken(token: string): Promise<DecodedIdToken>;
}
