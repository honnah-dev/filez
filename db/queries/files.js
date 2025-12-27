// this is the file where all the functions like getFiles get made
//it runs sql, it doesnt touch express- “What data do you want from PostgreSQL?”

import db from "#db/client";

//honnah! bellow- this getFiles also needs to include the folder name
export async function getFilesIncludingFolderName(){
  const sql = `
  SELECT 
  files.*,
  folders.name AS folder_name
  FROM 
  files 
  JOIN folders ON folders.id = files.folder_id
  `
  const { rows: files } = await db.query(sql);
  return files;
}

export async function createFile(name, size, folderId) {
  const sql = `
  INSERT INTO files
  (name, size, folder_id)
  VALUES
  ($1, $2, $3)
  RETURNING *
  `;
  const
  { rows: [file] } = await db.query(sql, [name, size, folderId]);
  return file;
}
