import crypto from 'crypto';

export const random = (): string => crypto.randomBytes(128).toString('base64');
export const verifyJWT = (salt: string, password: string): string => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(process.env.SECRET || "").digest('hex');
}