/*
  Warnings:

  - You are about to drop the column `metDescription` on the `SEO_Tag` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SEO_Tag" DROP COLUMN "metDescription",
ADD COLUMN     "metaDescription" TEXT NOT NULL DEFAULT E'';
