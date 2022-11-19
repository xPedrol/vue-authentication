import {defineStore} from 'pinia';
import type {IUser} from "@/models/User.mode";

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [] as IUser[],
        user: null as IUser | null,
    }),
    getters: {
        getUser(): IUser | null {
            return this.user;
        },
        getUsers(): IUser[] {
            return this.users;
        }
    },
    actions: {
        setUser(user: IUser) {
            this.user = user;
        },
        logout() {
            this.user = null;
        },
        login(user: IUser) {
            this.user = user;
        },
        getUserById(id: string): IUser | null {
            return this.users.find(user => user.id === id) ?? null;
        }
    }
});
