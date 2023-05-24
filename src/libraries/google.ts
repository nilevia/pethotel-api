const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID:string = process.env.google_oauth_client_id;
const CLIENT_SECRET:string = process.env.google_oauth_client_secret;
const CALLBACK_URL:string = process.env.google_oauth_callback_url;
const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, CALLBACK_URL);

export const Authenticate = (code: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ticket = await client.getToken(code)
            resolve(ticket.tokens)
        } catch (error) {
            reject(error)
        }
    })
}

export const VerifyToken = (token:string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: [CLIENT_ID],
            });
            const payload = ticket.getPayload();
            resolve(payload)
        } catch (error) {
            reject(error)
        }
    })
}

export const GenerateLogin = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(client.generateAuthUrl({
                scope: ['email', 'profile'],
                redirect_uri: CALLBACK_URL
            }))
        } catch (error) {
            reject(error)
        }
    })
}
