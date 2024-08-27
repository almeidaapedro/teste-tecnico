import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Leitura{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuarioId: number;

    @Column()
    medidor: string;

    @Column('decimal')
    leitura: number;

    @Column({type: 'timestamp', default: () => 'current_timestamp'})
    dataLeitura: Date;
}