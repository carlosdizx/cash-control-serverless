import {Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToMany} from "typeorm"
import Transaction from "./Transaction.entity";

@Entity({name: "categories"})
export default class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "name", type: "varchar"})
    name: string;

    @OneToMany(() => Transaction, transaction => transaction.category)
    transactions: Transaction[];
}
