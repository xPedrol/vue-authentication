import {uuid} from "vue-uuid";

export interface ILoginForm {
    email: string;
    password: string;
}

export interface IRegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string;
}

export class User implements IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string;

    constructor(user: any = {}) {
        this.id = uuid.v1();
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.created_at = new Date().toISOString();
    }
}