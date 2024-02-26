/*
  Warnings:

  - You are about to drop the column `image` on the `Note` table. All the data in the column will be lost.
  - Added the required column `icon` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Note" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "tags" TEXT NOT NULL
);
INSERT INTO "new_Note" ("date", "id", "note", "tags", "title") SELECT "date", "id", "note", "tags", "title" FROM "Note";
DROP TABLE "Note";
ALTER TABLE "new_Note" RENAME TO "Note";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
