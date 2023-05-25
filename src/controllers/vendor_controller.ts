import {Request, Response} from "express";
import {deleteVendorById, getVendorById, getVendors, updateVendorById} from "../repositories/vendor_repository";
import {createUser} from "../repositories/user_repository";

export const getAllVendors = async (req: Request, res: Response) => {
    try {
        const vendors = await getVendors();

        return res.status(200).json(vendors);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const deleteVendor = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        const deletedVendor = await deleteVendorById(id);

        return res.status(200).json(deletedVendor);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const updateVendor = async (req: Request, res: Response) => {
    try {
        // const {id} = req.params;
        //
        // const {username} = req.body;
        //
        // if (!username) {
        //     return res.sendStatus(400);
        // }
        //
        // const vendor = await getVendorById(id);
        //
        // await updateVendorById(id, req.body)
        //
        // return res.status(200).json(req.body).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}