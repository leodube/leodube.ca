-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "type" SET DEFAULT E'fullTime';

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "type" TEXT DEFAULT E'programmingLanguage',
    "job" TEXT,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Skill_job_idx" ON "Skill"("job");

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_job_fkey" FOREIGN KEY ("job") REFERENCES "Job"("id") ON DELETE SET NULL ON UPDATE CASCADE;
