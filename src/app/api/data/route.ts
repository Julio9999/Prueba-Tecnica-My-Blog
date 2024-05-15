import { getJsonData } from '@/services/getJsonData';
import fs from 'fs';
import path from 'path';


export async function GET(request: Request) {

    try {
        const jsonData = getJsonData()
        return Response.json(jsonData);
    } catch (error) {
        return Response.json(error)
    }
}