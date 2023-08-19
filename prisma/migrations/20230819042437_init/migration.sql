/*
  Warnings:

  - Added the required column `create_time` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `create_time` DATETIME(3) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;
