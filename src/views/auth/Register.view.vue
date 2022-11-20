<script lang="ts">
import {useUserStore} from '@/stores/User.store';
import {defineComponent} from "vue";
import type {IRegisterForm} from "@/models/User.model";
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const form: IRegisterForm = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    const register = async () => {
      if (form.password !== form.confirmPassword) {
        alert('Senhas não conferem');
        return;
      }
      if (userStore.register(form)){
        //redirect to login page
        router.push('/login');
      } else {
        alert('Erro ao cadastrar usuário');
      }
    };
    return {
      form,
      register,
    };
  }
});
</script>
<template>
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 usePoppins">Login</h1>
    </div>
  </header>
  <main>
    <div class="flex justify-center items-center mt-10 p-3 md:p-0" style="height: 70vh">
      <form @submit.prevent="register" style="min-width: 100px;width: 100%;max-width: 550px">
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full md:w-12/12 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-first-name">
              Nome
            </label>
            <input required v-model="form.name" autocomplete="name"
                   class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-4 py-4 mb-3 leading-tight  focus:border-gray-500 focus:outline-none focus:bg-white"
                   id="grid-name" type="text" placeholder="Digite seu nome...">
            <!--            <p class="text-red-500 text-xs italic">Please fill out this field.</p>-->
          </div>
          <div class="w-full md:w-12/12 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-first-name">
              Email
            </label>
            <input required v-model="form.email" autocomplete="email"
                   class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-4 py-4 mb-3 leading-tight  focus:border-gray-500 focus:outline-none focus:bg-white"
                   id="grid-email" type="email" placeholder="Digite seu email...">
            <!--            <p class="text-red-500 text-xs italic">Please fill out this field.</p>-->
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full md:w-6/12 px-3">
            <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-password">
              Senha
            </label>
            <input required v-model="form.password" autocomplete="password"
                   class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-password" type="password" placeholder="Digite sua senha...">
          </div>
          <div class="w-full md:w-6/12 px-3">
            <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-password">
              Confirmaar Senha
            </label>
            <input required v-model="form.confirmPassword" autocomplete="confirmPassword"
                   class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid--confirm-password" type="password" placeholder="Confirme sua senha...">
          </div>
        </div>
        <div class="flex justify-between items-center mb-3">
          <small class="text-gray-600">Possui cadastro? <a class="underline text-blue-600">
            <router-link to="/login"> Faça login</router-link>
          </a>.</small>
          <button type="submit"
                  class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Registrar
          </button>
        </div>
      </form>
    </div>
  </main>

</template>