/*
  Warnings:

  - You are about to drop the column `create_time` on the `user` table. All the data in the column will be lost.
  - Added the required column `updated_time` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `create_time`,
    ADD COLUMN `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_time` DATETIME(3) NOT NULL;
