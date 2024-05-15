'use server';

import fs from 'fs';
import path from 'path';

interface Props {
    
}

export const getJsonData = (): Promise<BlogEntries> | undefined  => {
    const directory = path.join(process.cwd(), 'data');
    const fileName = 'data.json';
    const filePath = path.join(directory, fileName);

    if (!fs.existsSync(filePath)) {
        Response.json({ message: 'El archivo JSON no existe' });
        return ;
    }

    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    return jsonData;
}