import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm';

@Entity()
export class Log {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    url!: string;

    @CreateDateColumn()
    createdAt!: Date;
}