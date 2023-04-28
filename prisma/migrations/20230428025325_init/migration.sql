-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "content" TEXT NOT NULL,
    "content_html" TEXT NOT NULL,
    "tag" VARCHAR(20) NOT NULL,
    "date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isdraft" BOOLEAN NOT NULL,
    "pv" INTEGER NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "name" VARCHAR(20) NOT NULL,
    "color" VARCHAR(20) NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("name")
);
