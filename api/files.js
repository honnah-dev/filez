//this is the file where all the file routes are taken care of- rout.get route.put etc
//remmber honnah the point of this file is express- all it cares about is requests and responses. Thats its main point


import express from "express";
const router = express.Router();
export default router;

import { getFilesIncludingFolderName } from "#db/queries/files";


router.get("/", async (req, res) => {
const files = await getFilesIncludingFolderName();
res.send(files);

});

