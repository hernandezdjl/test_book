import {MigrationInterface, QueryRunner} from "typeorm";

export class addUser51610502243676 implements MigrationInterface {
    name = 'addUser51610502243676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "comment" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "comment"`);
    }

}
