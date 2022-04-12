import { Response } from "express";
import AdmZip from 'adm-zip'
import fs from 'fs'
import path from 'path'

export function get(req, res: Response, next) {
    // console.log(req.body, '5');
    console.log(req.file.buffer, '6');
    console.log('nije proslo');


    const response = returnResponse(req.file.buffer)

    return res.status(200).send(response)
}


function returnResponse(epub) {

    // console.log(epub, '68');

    const zip = new AdmZip(epub);
    // console.log(zip);

    const zipEntries = zip.getEntries(); // an array of ZipEntry records

    let a = [];
    let data;

    zipEntries.forEach((entry) => {
        // console.log(entry.entryName);
        const entryName = entry.entryName;
        const decompressedData = zip.readFile(entry); // decompressed buffer of the entry
        if (entry.entryName === "bronze/page_styles.css") {
            console.log(path.join(__dirname + "/temp/") + "style.css");
            data = decompressedData.toJSON();
            // fs.writeFile(
            //     path.join(__dirname + "/temp/") + 'style.css',
            //     decompressedData,
            //     (data) => {
            //         // console.log(data);
            //     }
            // );
        } else {
            data = decompressedData.toString("utf-8");
        }

        // console.log(decompressedData.);
        a.push({
            name: entry.entryName,
            data: data,
        });
    });
    return a;
}