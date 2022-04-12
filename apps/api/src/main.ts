import cors from 'cors'
import express from 'express'
import AdmZip from 'adm-zip'
import fs from 'fs'
import path from 'path'
import epubRoutes from './app/routes/epub'

const app = express();
const port = 2020;

// reading archives
// console.log(path.resolve(__dirname, './assets/bronze.epub'));

let epub = null;

fs.readFile(path.resolve(__dirname, './assets/bronze.epub'), function (err, data) {
    if (err) {
        throw err;
    }
    // console.log(data);
    epub = data
});
// console.log(epub);

// const zip = new AdmZip(epub);
// // console.log(zip);

// const zipEntries = zip.getEntries(); // an array of ZipEntry records
// console.log(zipEntries);

// console.log(zipEntries);
// zipEntries.forEach((entry) => {
//     console.log(entry);
// //     var entryName = entry.entryName;
// //     var decompressedData = zip.readFile(entry); // decompressed buffer of the entry
// });

// console.log(typeof zip.readFile(zip.getEntry("index_split_001.html"))
// .toString('utf-8'));

app.use(cors({ origin: true }));
app.use(express.json());
app.use('/', epubRoutes);
app.get("/", (req, res) => {
    console.log(path.dirname('/assets/bronze.epub'));
    res.send(`Example app listening at http://localhost:${port}`);

});

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

function returnResponse() {

    console.log(epub, '68');

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
