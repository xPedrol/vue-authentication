import {defineStore} from 'pinia';
import type {IUser, ILoginForm, IRegisterForm} from "@/models/User.model";
import {useCookies} from "@vueuse/integrations/useCookies";
import {User} from "@/models/User.model";
import {defaultOptions} from "@/config/cookie.config";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            users: [] as IUser[],
            user: null as IUser | null,
        };
    },
    getters: {
        getUsers(): IUser[] {
            return this.users;
        }
    },
    actions: {
        getUser(): IUser | null {
            const cookies = useCookies(['locale']);
            const user = cookies.get('user');
            if (user) {
                this.user = user;
                return user;
            } else {
                return null;
            }
        },
        register(registerUser: IRegisterForm): boolean {
            const user = new User({
                name: registerUser.name,
                email: registerUser.email,
                password: registerUser.password,
            });
            if (!this.findUserByEmail(user.email)) {
                console.warn(this.user);
                this.users.push(user);
                const cookies = useCookies(['locale']);
                cookies.set('users', this.users, defaultOptions);
                return true;
            } else {
                return false;
            }
        },
        logout() {
            const cookies = useCookies(['locale']);
            this.user = null;
            cookies.remove('user', defaultOptions);
        },
        login(loginForm: ILoginForm): boolean {
            const cookies = useCookies(['locale']);
            const user = this.findUserByEmail(loginForm.email);
            if (user && user.password === loginForm.password) {
                this.user = user;
                cookies.set('user', this.user, defaultOptions);
                return true;
            } else {
                return false;
            }
        },
        getUserById(id: string): IUser | null {
            if (this.users && this.users.length > 0) {
                return this.users.find(user => user.id === id) ?? null;
            }
            return null;
        },
        findUserByEmail(email: string): IUser | null {
            const cookies = useCookies(['locale']);
            const storedUsers = cookies.get('users');
            if(Array.isArray(storedUsers)) {
                this.users = storedUsers;
            }
            if (this.users && this.users.length > 0) {
                return this.users.find(user => user.email === email) ?? null;
            }
            return null;
        }
    }
});
