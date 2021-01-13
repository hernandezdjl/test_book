import {MigrationInterface, QueryRunner} from "typeorm";

export class addUser61610502988127 implements MigrationInterface {
    name = 'addUser61610502988127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "status" character varying(9) NOT NULL DEFAULT 'ACTIVE'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "status" character varying(8) NOT NULL DEFAULT 'ACTIVE'`);
    }

}
