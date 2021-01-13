import {MigrationInterface, QueryRunner} from "typeorm";

export class addUser71610503241911 implements MigrationInterface {
    name = 'addUser71610503241911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "comment" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "status" character varying(10) NOT NULL DEFAULT 'ACTIVE'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "status" character varying(8) NOT NULL DEFAULT 'ACTIVE'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "comment"`);
    }

}
