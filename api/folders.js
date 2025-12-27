//this is the file where all the folder routes are taken care of- rout.get route.put etc

import express from "express";
const router = express.Router();
export default router;

import { getFolders, getFoldersIncludingIdIncludingFiles } from "#db/queries/folders";
import { createFile } from "#db/queries/files";


router.get("/", async (req, res) => {
  const folders = await getFolders();
  res.send(folders);

});

router.param('id', async(req, res, next, id) => {
  //Use regex to check if the ID is a positibe integer
  if (!/^\d+$/.test(id))
    return res.status(400).send("ID must be a positive integer.");


  //try to find the folder with the specified ID
  const folder = await getFoldersIncludingIdIncludingFiles(id);
  if (!folder) return res.status(404).send("Folder does not exist.");

  //we can attach the folder to the request object, which subsequent middleware can access
  req.folder = folder;

  //so here right above this is a way to push a new key value pair into the req object. so like it looked like req= {headers: "stuff"} and if i .movie to the end of it- it wnat to add another opbejct into that req object!

  next();
  
});

router.get("/:id", async (req,res) => {

  res.send(req.folder);
});

router.post("/:id/files", async (req, res ) => {
  if (!req.body) return res.status(400).send("Request body is not provided, and is needed.");

  const { name, size  } = req.body;

  if ( !name || !size ) {
    return res.status(400).send("Request body is missing feilds. It needs all fields to be filled in in order to work.");
  }
  const file = await createFile(name, size, req.folder.id );
  return res.status(201).send(file);

});