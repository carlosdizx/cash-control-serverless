import {Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToMany} from "typeorm"
import Transaction from "./Transaction.entity";

@Entity({name: "users"})
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({name: "name", type: "varchar"})
    name: string;

    @Column({name: "email", type: "varchar"})
    email: string;

    @Column({name: "password", type: "varchar"})
    password: string;

    @OneToMany(() => Transaction, transaction => transaction.user)
    transactions: Transaction[];
}
