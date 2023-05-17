import {Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne} from "typeorm"
import User from "./User.entity";

@Entity({name: "transactions"})
export default class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    date: Date;

    @Column()
    description: string;

    @ManyToOne(() => User, user => user.transactions)
    user: User;
}
