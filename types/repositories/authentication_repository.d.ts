export type Authentication = {
    id?: string;
    ref_id: string;
    ref_table: string;
    token: string;
    created_at?: Date;
    updated_at?: Date;
};
export declare const getAuthenticationByToken: (token: string) => Promise<Authentication | null>;
export declare const deleteAuthenticationByToken: (token: string) => Promise<Authentication | null>;
export declare const createAuthentication: (values: Authentication) => Promise<Authentication | null>;
