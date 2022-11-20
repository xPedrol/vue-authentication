<script lang="ts">
import {defineComponent} from "vue";
import {useUserStore} from "@/stores/User.store";
import {useRouter} from "vue-router";
import {useMeta} from "vue-meta";

export default defineComponent({
  setup() {
    useMeta({
      title: "Login",
    });
    const userStore = useUserStore();
    const router = useRouter();
    const form = {
      email: '',
      password: '',
    };
    const login = () => {
      if (userStore.login(form)) {
        //redirect to home page
        router.push('/');
      } else {
        alert('Erro ao logar usuário');
      }
      console.log(form);
    };
    return {
      form,
      login
    };
  },
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
      <form @submit.prevent="login" style="min-width: 100px;width: 100%;max-width: 550px">
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full md:w-12/12 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-first-name">
              Email
            </label>
            <input v-model="form.email" autocomplete="email"
                   class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-4 py-4 mb-3 leading-tight  focus:border-gray-500 focus:outline-none focus:bg-white"
                   id="grid-email" type="email" placeholder="Digite seu email...">
            <!--            <p class="text-red-500 text-xs italic">Please fill out this field.</p>-->
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full px-3">
            <label class="block tracking-wide text-gray-600 text-xs font-bold mb-2" for="grid-password">
              Password
            </label>
            <input v-model="form.password" autocomplete="current-password"
                   class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="grid-password" type="password" placeholder="Digite sua senha...">
          </div>
        </div>
        <div class="flex justify-between items-center mb-3">
          <small class="text-gray-600">Não tem cadastro? <a class="underline text-blue-600">
            <router-link to="/register"> Registre-se</router-link>
          </a>.</small>
          <button type="submit"
                  class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Login
          </button>
        </div>
      </form>
    </div>
  </main>

</template>