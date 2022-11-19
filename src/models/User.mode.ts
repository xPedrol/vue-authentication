import {uuid} from "vue-uuid";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string;
}

export default class User implements IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string;

    constructor(user: IUser) {
        this.id = uuid.v1();
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.created_at = new Date().toISOString();
    }
}