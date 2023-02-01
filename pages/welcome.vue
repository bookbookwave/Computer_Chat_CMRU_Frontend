<template>
  <div>
    <div>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows="hover"
      >
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />
        <v-carousel-item
          v-for="(slide, i) in data.slides"
          :key="i"
        >
          <v-sheet
            :color="data.colors[i]"
            height="100%"
          >
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                {{ slide }} Slide
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div>
      <v-list
        :items="data.items"
        item-props
        lines="three"
      >
        <template #subtitle="{ subtitle }">
          <div v-html="subtitle" />
        </template>
      </v-list>
    </div>
  </div>
</template>
<script lang="ts" setup>

const data = reactive({
  colors: [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4'
  ],
  slides: [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth'
  ],
  items: [
    { type: 'subheader', title: 'Today' },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?',
      subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      title: 'Summer BBQ',
      subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I\'m out of town this weekend.'
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      title: 'Birthday gift',
      subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'
    },
    { type: 'divider', inset: true },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      title: 'Recipe to try',
      subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
    }
  ]

})
useHead({
  title: 'Welcome',
  meta: [
    {
      name: 'description',
      content: 'Chat'
    }
  ]
})
</script>
