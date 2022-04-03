/*
  Warnings:

  - You are about to drop the column `image` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "image";

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT E'',
    "image" JSONB,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Page_image" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Job_image" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Project_image" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Page_image_AB_unique" ON "_Page_image"("A", "B");

-- CreateIndex
CREATE INDEX "_Page_image_B_index" ON "_Page_image"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Job_image_AB_unique" ON "_Job_image"("A", "B");

-- CreateIndex
CREATE INDEX "_Job_image_B_index" ON "_Job_image"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Project_image_AB_unique" ON "_Project_image"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_image_B_index" ON "_Project_image"("B");

-- AddForeignKey
ALTER TABLE "_Page_image" ADD FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Page_image" ADD FOREIGN KEY ("B") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Job_image" ADD FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Job_image" ADD FOREIGN KEY ("B") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_image" ADD FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_image" ADD FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
