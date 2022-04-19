/*
  Warnings:

  - You are about to drop the `SEO_Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Page" DROP CONSTRAINT "Page_seo_fkey";

-- DropTable
DROP TABLE "SEO_Tag";

-- CreateTable
CREATE TABLE "Seo" (
    "id" TEXT NOT NULL,
    "page" TEXT NOT NULL DEFAULT E'',
    "metaTitle" TEXT NOT NULL DEFAULT E'',
    "metDescription" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Seo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_seo_fkey" FOREIGN KEY ("seo") REFERENCES "Seo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
