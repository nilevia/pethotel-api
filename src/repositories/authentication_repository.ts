import prisma from "../prisma";
import {AuthRole} from "../middlewares";


export type Authentication = {
    id?: string,
    ref_id: string,
    ref_table: string,
    session_token: string,
    created_at?: Date,
    updated_at?: Date,
}

export const getAuthenticationByToken = (session_token: string) => prisma.authentication.findFirst({
    where: {
        session_token: session_token,
    },
})

export const getAuthenticationByTokenUser = (session_token: string) => prisma.authentication.findFirst({
    where: {
        session_token: session_token,
        ref_table: AuthRole.USER,
    },
})

export const getAuthenticationByTokenVendor = (session_token: string) => prisma.authentication.findFirst({
    where: {
        session_token: session_token,
        ref_table: AuthRole.VENDOR,
    },
})

