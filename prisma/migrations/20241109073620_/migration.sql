/*
  Warnings:

  - A unique constraint covering the columns `[name,url,ownerId]` on the table `Bookmark` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_name_url_ownerId_key" ON "Bookmark"("name", "url", "ownerId");
