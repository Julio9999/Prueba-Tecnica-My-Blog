'use server';
import fs from 'fs';
import path from 'path';
import DOMPurify from 'isomorphic-dompurify';
import { IFormSchema } from '@/helpers';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import { dateFormat } from '@/helpers/constans/dateFormat';


export const saveJson = (json: IFormSchema): Promise<any> | any  => {

    const directory = path.join(process.cwd(), 'data');

    const fileName = 'data.json';

    const filePath = path.join(directory, fileName);

    let jsonData = [];

    if(fs.existsSync(filePath)){
        const existingData = fs.readFileSync(filePath, 'utf-8');
        jsonData = JSON.parse(existingData).items
    }



    for(let i=0; i < jsonData.length; i++){
          if(json.title === jsonData[i].title){
              return {message: 'Titulo repetido'};
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

    const stringifiedJson = JSON.stringify(entryData)

    const sanitizedHtml = DOMPurify.sanitize(stringifiedJson)

    jsonData.push(JSON.parse(sanitizedHtml))


    fs.writeFileSync(filePath, JSON.stringify({items:jsonData}));
    return {message: "Guardado correctamente"}
}