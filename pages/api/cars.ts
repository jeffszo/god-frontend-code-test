import { NextApiRequest, NextApiResponse } from "next";
import data from '../../public/api/cars.json';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    response.status(200).json(data);
}