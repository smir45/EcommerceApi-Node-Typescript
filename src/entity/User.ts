import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { UserRole } from "../types";

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar",
        nullable: false,
        length: 100
    })
    fName: string

    @Column({ type: "varchar" ,
        nullable: false,
        length: 100
    })
    lName: string

    @Column({ type: "varchar",
        nullable: false,
        length: 320
    })
    email: string

    @Column({ type: "varchar",
        nullable: false,
        length: 320
    })
    password: string

    @Column({ type: "enum",
        default: 'general',
        enum: ['general', 'admin', 'vendor']
    })
    role: UserRole;

    @Column({
        name: 'verification_token',
        type: "varchar",
        length: 360
    })
    verification_token: string
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;


}
