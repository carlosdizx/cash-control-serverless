import {Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne} from "typeorm"
import User from "./User.entity";
import Category from "./Category.entity";

@Entity({name: "transactions"})
export default class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "amount", type: "numeric"})
    amount: number;

    @Column({name: "date", type: "timestamp"})
    date: Date;

    @Column({name: "description", type: "varchar"})
    description: string;

    @ManyToOne(() => User, user => user.transactions)
    user: User;

    @ManyToOne(() => Category, category => category.transactions)
    category: Category;

}
