   import express, { json, urlencoded } from 'express'
   import cors from 'cors'
   import cookieParser from 'cookie-parser';

    const app=express();

    app.use(cors());
    app.use(json());
    app.use(urlencoded());
    app.use(express.static("public"));
    app.use(cookieParser());


 export default app;