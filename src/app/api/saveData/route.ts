'use server';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import { dateFormat } from '@/helpers/constans/dateFormat';


export async function POST(req: Request) {
    const directory = path.join(process.cwd(), 'data');
    const json = await req.json();


    const fileName = 'data.json';

    const filePath = path.join(directory, fileName);

    let jsonData = [];

    if (fs.existsSync(filePath)) {
        const existingData = fs.readFileSync(filePath, 'utf-8');
        jsonData = JSON.parse(existingData).items
    }



    for (let i = 0; i < jsonData.length; i++) {
        if (json.title === jsonData[i].title) {
            return new Response('Titulo repetido', {
                status: 400
            });
        }
    }

    const currentDate = new Date();

    const entryData: BlogEntry = json && {
        slug: json.title.toLocaleLowerCase().replace(/ /g, '-'),
        title: json.title,
        content: json.content,
        id: uuidv4(),
        date: format(currentDate, dateFormat)
    }


    jsonData.unshift((entryData))

    fs.writeFileSync(filePath, JSON.stringify({ items: jsonData }));
    return new Response("Guardado correctamente", {
        status: 200
    })
}