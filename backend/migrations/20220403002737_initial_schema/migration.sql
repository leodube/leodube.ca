-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "page" TEXT NOT NULL DEFAULT E'',
    "status" TEXT DEFAULT E'draft',
    "content" JSONB NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    "seo" TEXT,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL DEFAULT E'',
    "position" TEXT NOT NULL DEFAULT E'',
    "type" TEXT DEFAULT E'fullTime',
    "contract" BOOLEAN NOT NULL DEFAULT false,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "isCurrent" BOOLEAN NOT NULL DEFAULT false,
    "description" JSONB NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "subtitle" TEXT NOT NULL DEFAULT E'',
    "image" JSONB,
    "type" TEXT DEFAULT E'personal',
    "description" JSONB NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "type" TEXT NOT NULL DEFAULT E'programmingLanguage',
    "level" TEXT NOT NULL DEFAULT E'weekly',

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SEO_Tag" (
    "id" TEXT NOT NULL,
    "page" TEXT NOT NULL DEFAULT E'',
    "metaTitle" TEXT NOT NULL DEFAULT E'',
    "metDescription" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "SEO_Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Job_skills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Page_seo_idx" ON "Page"("seo");

-- CreateIndex
CREATE UNIQUE INDEX "_Job_skills_AB_unique" ON "_Job_skills"("A", "B");

-- CreateIndex
CREATE INDEX "_Job_skills_B_index" ON "_Job_skills"("B");

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_seo_fkey" FOREIGN KEY ("seo") REFERENCES "SEO_Tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Job_skills" ADD FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Job_skills" ADD FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
