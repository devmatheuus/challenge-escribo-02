import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';
import { User } from './user.entities';

@Entity('phones')
export class Phone {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({ type: 'varchar', length: 2, nullable: false })
    ddd: string;

    @Column({ type: 'varchar', length: 9, nullable: false })
    number: string;

    @ManyToOne(() => User, (user) => user.phones)
    user: User;
}
