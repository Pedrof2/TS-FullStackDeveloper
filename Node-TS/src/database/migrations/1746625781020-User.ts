import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1746625781020 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'user_id',
                        type: 'string',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'string',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'string',
                        isNullable: false,
                        isUnique: true
                    }, 
                    {
                        name: 'password',
                        type: 'string',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
