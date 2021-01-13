import {MigrationInterface, QueryRunner} from "typeorm";

export class updatecreatecolumn1610566012721 implements MigrationInterface {
    name = 'updatecreatecolumn1610566012721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_673613c95633d9058a44041794` ON `user`");
        await queryRunner.query("ALTER TABLE `user_detail` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user_detail` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `role` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `role` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `role` CHANGE `updated_at` `updated_at` timestamp(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `role` CHANGE `created_at` `created_at` timestamp(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `updated_at` `updated_at` timestamp(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `created_at` `created_at` timestamp(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `user_detail` CHANGE `updated_at` `updated_at` timestamp(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `user_detail` CHANGE `created_at` `created_at` timestamp(0) NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_673613c95633d9058a44041794` ON `user` (`detail_id`)");
    }

}
