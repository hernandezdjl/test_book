import {MigrationInterface, QueryRunner} from "typeorm";

export class role1610546408089 implements MigrationInterface {
    name = 'role1610546408089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `role` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `role`");
    }

}
