//this is the file where all the file routes are taken care of- rout.get route.put etc
//remmber honnah the point of this file is express- all it cares about is requests and responses. Thats its main point


import express from "express";
const router = express.Router();
export default router;

import { getFiles } from "#db/queries/files";
import { getFolders } from "#db/queries/folders";

router.get("/files", async (req, res) => {
const files = await getFiles();
res.send(files);

});

router.get("/folders", async (req, res) => {
  const folders = await getFolders();
  res.send(folders);


});