/*
  Warnings:

  - You are about to drop the column `cardId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_cardId_fkey";

-- DropIndex
DROP INDEX "Card_creatorId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "cardId";

-- CreateTable
CREATE TABLE "_card_assigned" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_card_assigned_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_card_assigned_B_index" ON "_card_assigned"("B");

-- AddForeignKey
ALTER TABLE "_card_assigned" ADD CONSTRAINT "_card_assigned_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_card_assigned" ADD CONSTRAINT "_card_assigned_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
