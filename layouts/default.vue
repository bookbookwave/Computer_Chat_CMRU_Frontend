<template>
  <v-app light>
    <v-card>
      <v-layout class="min-h-screen">
        <v-app-bar color="dark" :floating="true">
          <template #prepend>
            <v-app-bar-nav-icon @click="data.drawer = !data.drawer" />
          </template>

          <v-app-bar-title>{{ data.title }}</v-app-bar-title>

          <v-spacer />

          <!-- <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn> -->

          <v-btn :icon="data.switch ? 'mdi-weather-night' : 'mdi-weather-sunny'" @click="toggleTheme" />

          <!-- <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn> -->
          <v-menu
            transition="slide-x-transition"
          >
            <template #activator="{ props }">
              <!-- <v-btn
                color="primary"
                v-bind="props"
              >
                Slide X Transition
              </v-btn> -->
              <v-btn color="primary" icon v-bind="props">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in contact"
                :key="i"
                :to="item.to"
                :prepend-icon="item.icon"
                @click="onContentClick(item.title)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
        <v-navigation-drawer v-model="data.drawer" temporary>
          <div class="flex align-center">
            <v-list-item :prepend-avatar="`${data.avatar.startsWith('http') ? 'https://picsum.photos/300/300': `${data.http}/images/${data.avatar}`}`" :title="data.name" :subtitle="data.email" nav />
            <v-chip :color="getColor()">
              {{ userRole }}
            </v-chip>
          </div>

          <v-divider />

          <v-list density="compact" nav>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              exact
              :to="item.to"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="i"
              @click="onContentClick(item.title)"
            />
            <v-list-item
              exact
              :to="'/'"
              prepend-icon="mdi-logout"
              title="Logout"
              @click="onLogout"
            />
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <slot />
        </v-main>
      </v-layout>
    </v-card>
    <v-footer>
      <div class="flex justify-sm-space-between min-w-full">
        <div>
          Copyright © 2023 Department of Computer, CMRU. All rights reserved.
        </div>
        <div>
          V.1.0.0
        </div>
      </div>
      <div class="flex justify-end min-w-full" />
    </v-footer>
    <!-- <v-footer
      :absolute="!data.fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script lang="ts" setup>
import jwtDecode from 'jwt-decode'
import { useTheme } from 'vuetify/lib/framework.mjs'
import mutationsDatabase from '~~/libs/mutaions/mutationsDatabase'
import socket from '~~/plugins/socket.io'
import { useEnv } from '~~/store/environment'
import { useProfile } from '~~/store/profile'
import { Role } from '~~/types/graphql'
const contact = ref<any[]>([
  {
    icon: 'mdi-contacts-outline',
    title: 'Contact',
    to: '/contact'
  }
])
const theme = useTheme()
const items = ref<any[]>(
  [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/welcome'
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire'
    },
    {
      icon: 'mdi-file-document-multiple',
      title: 'Project',
      to: '/project'
    },
    {
      icon: 'mdi-message-badge',
      title: 'Message',
      to: '/message'
    },
    {
      icon: 'mdi-account',
      title: 'Profile',
      to: '/profile'
    }
  ]
)

const data = reactive({
  switch: !!theme.global.current.value.dark,
  userId: '',
  name: '',
  email: '',
  avatar: '',
  clipped: false,
  drawer: false,
  fixed: false,
  rail: false,
  http: useEnv().BACKEND_API_URL,
  title: 'Welcome',
  items: [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/welcome'
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire'
    },
    {
      icon: 'mdi-file-document-multiple',
      title: 'Project',
      to: '/project'
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
      title: 'Database',
      to: '/database'
    },
    {
      icon: 'mdi-message-badge',
      title: 'Test Chat',
      to: '/message2'
    }
  ]
})

const onLogout = () => {
  useRouter().push('/')
  socket.disconnect()
  useCookie('token').value = ''
  socket.on('disconnect', () => {
    console.log(socket.connected) // false
  })
}

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  data.switch = !data.switch
}

type typeToken ={
  exp?: number;
  iat?: number;
  userId: string;
  role: Role;
  email: string;
  avatar: string;
  name: string;
}

// TODO : แก้ไขให้เป็นการดึงจาก cookie แทน

const token = useCookie('token').value as any
if (!token) {
  useRouter().push('/')
}
const deToken = jwtDecode(token?.data.login) as typeToken
data.email = deToken.email
data.avatar = deToken.avatar
data.name = deToken.name
useProfile().setUser({ userId: deToken.userId, email: deToken.email, avatar: deToken.avatar, role: deToken.role, name: deToken.name })

onBeforeMount(() => {
  mutationsDatabase().createLogLogin({ onResult: () => {}, onError: () => {}, value: { id: deToken.userId } })
})

if (useProfile().role === 'ADMIN') {
  items.value.push(
    {
      icon: 'mdi-wrench-cog',
      title: 'Configuration',
      to: '/configure'
    },
    {
      icon: 'mdi-database',
      title: 'Database',
      to: '/database'
    }

  )
}
const userRole = useProfile().role
const getColor = () => {
  const role = useProfile().role
  if (role === 'ADMIN') { return 'red' } else if (role === 'TEACHER') { return 'orange' } else { return 'green' }
}

const onContentClick = (item:any) => {
  data.title = item
  data.rail = !data.rail
}

</script>
