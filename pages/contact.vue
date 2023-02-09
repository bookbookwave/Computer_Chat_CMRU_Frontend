<template>
  <div>
    <v-container>
      <div>
        <v-img
          height="100%"
          max-height="500"
          cover
          src="https://gd.lnwfile.com/_/gd/_raw/nf/v5/gd.jpg"
          class="flex align-end"
        >
          <v-avatar
            color="grey"
            size="200"
            rounded
            class="mx-4"
          >
            <v-img cover src="/contact_img.jpg" />
          </v-avatar>
          <v-list-item
            class="text-white mx-4"
            title="Wave Watcharin"
            subtitle="Software Engineer"
          />
        </v-img>
      </div>
      <div class="flex md:flex-row flex-col justify-space-between mt-4 mx-10">
        <div class="flex flex-col gap-3 md:w-1/12 w-full">
          <v-btn
            color="info"
            prepend-icon="mdi-facebook"
            size="x-large"
            @click="onClickLink('https://www.facebook.com/MMicroWaveNeko/')"
          >
            <div class="text-overline">
              Wave Watcharin
            </div>
          </v-btn>
          <v-btn
            color="#FCB878"
            prepend-icon="mdi-instagram"
            size="x-large"
            @click="onClickLink('https://www.instagram.com/wave_watcharin/')"
          >
            <div class="text-overline">
              Wave Watcharin
            </div>
          </v-btn>
          <v-btn
            color="success"
            prepend-icon="mdi-phone"
            size="x-large"
          >
            <div class="text-overline">
              +66 62-231-1443
            </div>
          </v-btn>
          <v-card
            height="75"
            class="d-inherit align-center"
            color="primary-darken-1"
            prepend-icon="mdi-email"
            title="Email Address"
            subtitle="62143111@g.cmru.ac.th"
          />
          <v-card
            color="primary"
            prepend-icon="mdi-email"
            title="Contact Address"
            text="มหาวิทยาลัยราชภัฏเชียงใหม่ 202 ถนน ช้างเผือก ตำบลช้างเผือก อำเภอเมืองเชียงใหม่ เชียงใหม่ 50300"
          />
        </div>
        <div class="w-full mx-2">
          <div class="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13289.471400971996!2d98.98483797386379!3d18.801452490241097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3aeb73575db7%3A0xa61747978750d27c!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lij4Liy4LiK4Lig4Lix4LiP4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1675528696482!5m2!1sth!2sth"
              width="500"
              height="400"
              style="border:0;"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script lang="ts" setup>

const onClickLink = (link: string) => {
  window.open(link, '_blank')
}

useHead({
  title: 'Contact',
  meta: [
    {
      name: 'description',
      content: 'Contact'
    }
  ]
})
</script>
