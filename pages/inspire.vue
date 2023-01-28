<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
          <div class="flex flex-wrap">
            <div>
              <img
                :src="image"
                cover
              >
            </div>
          </div>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>

// type CharactersResults = {
//   characters: {
//     results: {
//       id: string,
//       name: string,
//       image: string,
//       status: string,
//       species: string,
//       location: {
//         name: string
//       }
//     }[]
//   }
// }

import { useEnv } from '~~/store/environment'
const image = `${useEnv().BACKEND_API_URL}/images/-tG2dfFH8-84658493_p0.png`

// const ricky = gql`
// query getCharacters {
//   characters {
//     results {
//       name
//       image
//       status
//       id
//       species
//       location {
//         name
//       }
//     }
//   }
// }
// `
// const { data } = await useAsyncQuery<CharactersResults>(ricky)
</script>
