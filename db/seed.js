


// import db from "#db/client";

// // inport createFile 
// // and creatilteFOlder

// await db.connect();

// await seed();
// console.log("🌱 seed.js started");
// await db.end();
// console.log("🌱 Database seeded.");

// import { createFolder } from "#db/queries/folders";
// import { createFile } from "#db/queries/files";


// async function seed() {

//   for (let i = 1; i <= 3; i++) {
//     const folder = await createFolder("Folder " + i);
//     console.log(folder);
//     for (let j = 1; j <= 5; j++) {
//       await createFile("File " + j, 1000 * j, folder.id);
//     }
//   }
// }


import db from "#db/client";

import { createFile } from "#db/queries/files";
import { createFolder } from "#db/queries/folders";

await db.connect();
await seed();


await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  for (let i = 1; i <= 3; i++) {
    const folder = await createFolder("Folder " + i);
    console.log(folder);
    for (let j = 1; j <= 5; j++) {
      await createFile("File " + j, 1000 * j, folder.id);
    }
  }
}
