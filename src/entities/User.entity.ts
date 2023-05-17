import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from "typeorm"

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("name")
    name: string;

    @Column("email")
    email: string;

    @Column("password")
    password: string;
}
