import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UserRole } from "../types";

@Entity()
export class User {

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


}
