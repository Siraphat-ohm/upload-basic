import express, { Request, Response } from "express";
import multer from "multer";

const app = express();
const port = process.env.PORT || 3000;
const storage = multer.diskStorage({
    destination: function( req, file, callback ){
        callback(null, './uploads')
    },
    filename: function ( req, file, callback ){
        callback( null, file.originalname )
    }
})
const upload = multer( { storage });

app.post('/uploads', upload.single('file'), async ( req: Request, res:Response) => {
    console.log(req.file, req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`server start on port ${port}`);
})