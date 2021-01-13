import {MigrationInterface, QueryRunner} from "typeorm";

export class usuarioActualizado1610544608435 implements MigrationInterface {
    name = 'usuarioActualizado1610544608435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `username` varchar(25) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`)");
        await queryRunner.query("ALTER TABLE `user` ADD `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `status` varchar(8) NOT NULL DEFAULT 'ACTIVE'");
        await queryRunner.query("ALTER TABLE `user` ADD `created_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `updated_at` timestamp NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `email`");
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `username`");
    }

}
