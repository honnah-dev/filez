// this is the file where all the functions like getFolders get made
//it runs sql, it doenst touch express- “What data do you want from PostgreSQL?”

import db from "#db/client";

export async function getFolders() {
  const sql = `
  SELECT *
  FROM folders
  `;
  const { rows: folders } = await db.query(sql);
  return folders;
}

export async function createFolder(name) {
  const sql = `
  INSERT INTO folders
  (name)
  VALUES
  ($1)
  RETURNING *
  `;
  const { rows: [folder] } = await db.query(sql, [name]);
  return folder; 
}
