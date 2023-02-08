<template>
  <div>
    <div class="grid md:grid-cols-2 min-h-screen">
      <div class="grid justify-center align-center">
        <div class="ma-4">
          <div>
            <img :src="data.img1" alt="" class="max-w-sm">
          </div>
          <div class="mt-3 text-h5 text-center">
            Welcome
          </div>
          <div class="text-h3 text-center">
            ISTUDY CMRU
          </div>
        </div>
      </div>
      <div class=" grid align-center max-w-2xl">
        <v-card ref="form" class="ma-4">
          <v-card-text>
            <form @submit.prevent="submit">
              <v-text-field
                ref="email"
                v-model="data.email"
                :rules="[() => !!data.email || 'This field is required']"
                :error-messages="errorMessages"
                label="Email Address"
                placeholder="number@g.cmru.com"
                required
                type="email"
              />
            </form>
            <form @submit.prevent="submit">
              <v-text-field
                ref="password"
                v-model="data.password"
                :append-icon="data.show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="data.show1 ? 'text' : 'password'"
                :rules="[() => !!data.password || 'This field is required']"
                :error-messages="errorMessages"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                placeholder="************"
                required
                @click:append="data.show1 = !data.show1"
              />
            </form>
          </v-card-text>
          <div class="flex justify-center align-center">
            <div class="mx-4">
              Do you have any Account ?
            </div>
            <form-register-button />
          </div>
          {{ data.res }}
          <v-card-actions class="flex justify-center mb-4 mt-2">
            <v-btn
              :loading="data.isLoading"
              color="primary"
              text
              @click="submit"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
export default defineComponent({
  setup: () => {
    const data = reactive({
      img1: '/main-logo.png',
      show1: false,
      email: ref(null),
      password: ref(null),
      isLoading: false,
      res: ref(),
      env: useRuntimeConfig().BACK_END_API_URL
    })
    const errorMessages = ref('')
    const formHasErrors = ref(false)

    const form = computed(() => {
      return {
        email: data.email,
        password: data.password
      }
    })

    function submit () {
      data.isLoading = true
      formHasErrors.value = false
      mutationsDatabase().login(
        {
          onResult: () => {
            data.isLoading = false
            useRouter().push('/welcome')
          },
          onError: (error:Error) => {
            data.isLoading = false
            data.res = error
            console.error(error)
          },
          value: {
            email: data.email,
            password: data.password
          }
        }
      )
    }
    useHead({
      title: 'ISTUDY CMRU',
      meta: [
        {
          name: 'description',
          content: 'Chat'
        }
      ]
    })
    return {
      errorMessages,
      formHasErrors,
      form,
      submit,
      data
    }
  }
})

definePageMeta({
  layout: 'login'
})
</script>
