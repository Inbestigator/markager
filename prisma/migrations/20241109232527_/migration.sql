/*
  Warnings:

  - You are about to drop the column `name` on the `Bookmark` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title,url,ownerId]` on the table `Bookmark` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Bookmark` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Bookmark_name_url_ownerId_key";

-- AlterTable
ALTER TABLE "Bookmark" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_title_url_ownerId_key" ON "Bookmark"("title", "url", "ownerId");
