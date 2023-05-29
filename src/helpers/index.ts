import crypto from 'crypto';

export const random = (): string => crypto.randomBytes(128).toString('base64');
export const verifyJWT = (salt: string, password: string): string => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(process.env.SECRET || "").digest('hex');
}

export const addDomainUrl = (path: string): string => `${process.env.DOMAIN}/${path}`;

export const removeDomainUrl = (url: string): string => {
    const Url:URL = new URL(url);
    return Url.href.replace(Url.origin, '');
}


