import prisma from "../prisma";
import {Order} from "./order.service";


export type Report = {
    id?: string,
    order_id?: string,
    vendor_id?: string,
    user_id?: string,
    image: string,
    description: string,
    order?: Order | null,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}

//

export type CreateReportParams = {
    order_id: string,
    vendor_id: string,
    user_id: string,
    image: string,
    description: string,
}

export const CreateReport = async (params: CreateReportParams): Promise<Report | null> => {
    try {

        const report: Report | null = await prisma.report.create({
                data: params,
            }
        );

        return report;
    } catch (error) {
        throw error;
    }
}

export type GetReportsParams = {
    order_id?: string,
    vendor_id?: string,
    user_id?: string,
}

export const GetReports = async (params: GetReportsParams): Promise<Report[] | null> => {
    try {

        const where: any = {};

        if (params.order_id) where.order_id = params.order_id;
        if (params.vendor_id) where.vendor_id = params.vendor_id;
        if (params.user_id) where.user_id = params.user_id;

        const reports: Report[] | null = await prisma.report.findMany({
                where,
            }
        );

        return reports;
    } catch (error) {
        throw error;
    }
}

