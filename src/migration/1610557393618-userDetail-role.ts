import {MigrationInterface, QueryRunner} from "typeorm";

export class userDetailRole1610557393618 implements MigrationInterface {
    name = 'userDetailRole1610557393618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user_detail` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `lastName` varchar(255) NOT NULL, `status` varchar(8) NOT NULL DEFAULT 'ACTIVE', `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_roles` (`userId` int NOT NULL, `roleId` int NOT NULL, INDEX `IDX_472b25323af01488f1f66a06b6` (`userId`), INDEX `IDX_86033897c009fcca8b6505d6be` (`roleId`), PRIMARY KEY (`userId`, `roleId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `role` DROP COLUMN `role`");
        await queryRunner.query("ALTER TABLE `user` ADD `detail_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_673613c95633d9058a44041794` (`detail_id`)");
        await queryRunner.query("ALTER TABLE `role` ADD `name` varchar(20) NOT NULL");
        await queryRunner.query("ALTER TABLE `role` ADD `description` text NOT NULL");
        await queryRunner.query("ALTER TABLE `role` ADD `status` varchar(8) NOT NULL DEFAULT 'ACTIVE'");
        await queryRunner.query("ALTER TABLE `role` ADD `created_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `role` ADD `updated_at` timestamp NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_673613c95633d9058a44041794` ON `user` (`detail_id`)");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_673613c95633d9058a44041794d` FOREIGN KEY (`detail_id`) REFERENCES `user_detail`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_roles` ADD CONSTRAINT `FK_472b25323af01488f1f66a06b67` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_roles` ADD CONSTRAINT `FK_86033897c009fcca8b6505d6be2` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_roles` DROP FOREIGN KEY `FK_86033897c009fcca8b6505d6be2`");
        await queryRunner.query("ALTER TABLE `user_roles` DROP FOREIGN KEY `FK_472b25323af01488f1f66a06b67`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_673613c95633d9058a44041794d`");
        await queryRunner.query("DROP INDEX `REL_673613c95633d9058a44041794` ON `user`");
        await queryRunner.query("ALTER TABLE `role` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `role` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `role` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `role` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `role` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_673613c95633d9058a44041794`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `detail_id`");
        await queryRunner.query("ALTER TABLE `role` ADD `role` varchar(255) NOT NULL");
        await queryRunner.query("DROP INDEX `IDX_86033897c009fcca8b6505d6be` ON `user_roles`");
        await queryRunner.query("DROP INDEX `IDX_472b25323af01488f1f66a06b6` ON `user_roles`");
        await queryRunner.query("DROP TABLE `user_roles`");
        await queryRunner.query("DROP TABLE `user_detail`");
    }

}
