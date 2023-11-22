import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';

import { Phone } from './phone.entities';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    email: string;

    @Column({ type: 'text', nullable: false })
    password: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: false, default: null })
    updatedAt: Date | null;

    @Column({ name: 'last_login', type: 'timestamp', nullable: true, default: null })
    lastLogin: Date | null;

    @OneToMany(() => Phone, (phone) => phone.user)
    phones: Phone[];
}
