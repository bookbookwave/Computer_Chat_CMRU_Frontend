<template>
  <v-app light>
    <v-card>
      <v-layout class="min-h-screen">
        <v-app-bar
          color="dark"
        >
          <template #prepend>
            <v-app-bar-nav-icon @click="data.rail = !data.rail" />
          </template>

          <v-app-bar-title>Title</v-app-bar-title>

          <v-spacer />

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
        <v-navigation-drawer
          v-model="data.drawer"
          :rail="data.rail"
          permanent
          @click="data.rail = false"
        >
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
          />

          <v-divider />

          <v-list density="compact" nav>
            <v-list-item
              v-for="(item, i) in data.items"
              :key="i"
              exact
              :to="item.to"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="i"
              @click="data.rail = !data.rail"
            />
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <v-container>
            <slot />
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
    <!-- <v-footer
      :absolute="!data.fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script lang="ts" setup>
const data = reactive({

  clipped: false,
  drawer: true,
  fixed: false,
  rail: false,
  items: [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/'
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire'
    },
    {
      icon: 'mdi-message-badge',
      title: 'Message',
      to: '/message'
    },
    {
      icon: 'mdi-wrench-cog',
      title: 'Configuration',
      to: '/configure'
    },
    {
      icon: 'mdi-database',
      title: 'Data Management',
      to: '/dataManage'
    },
    {
      icon: 'mdi-database',
      title: 'Test Page',
      to: '/test'
    }
  ]

})

</script>
