<template>
  <div>
    <v-container>
      <div>
        <v-img
          height="100%"
          eager
          src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.6435-9/126239416_799164780945334_3834625187241263735_n.jpg?stp=dst-jpg_p640x640&_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHH7zjCx2Gj3595zaKxSfLuZ4BGYniHTKpngEZieIdMqn-yF-Mu5lITs6wZz2cfap47mg0vRxlFN7DevdMeabId&_nc_ohc=DPGqUAAoztkAX__jJXm&tn=ZVYivHrNn-SO3Vv5&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfAPV-9D9Jj9GL-rME2uYp-NjCDqdM2fCdDgj4XDBAGsfg&oe=6405DB3E"
          class="flex align-end"
        >
          <v-avatar
            color="grey"
            size="200"
            rounded
            class="mx-4"
          >
            <v-img cover src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.6435-9/119982142_747989302729549_7228540641539369400_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeErcohFl6RHFopxj0s_GfBNe0DUAf3wMeR7QNQB_fAx5PPssi1RnwbtbpLJ_0SaWGLAXfFX-IS4jqh-QcsS2W1r&_nc_ohc=H-XZPiBPlH4AX8KNUcF&tn=ZVYivHrNn-SO3Vv5&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfCwJGmJJw5cUAvfXCgaL55K0B80MbjH4rjUGR-_Xg8M8w&oe=6405F6CD" />
          </v-avatar>
          <v-list-item
            class="text-white mx-4"
            title="Wave Watcharin"
            subtitle="Software Engineer"
          />
        </v-img>
      </div>
      <div class="flex justify-space-around mt-4">
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
      </div>
      <div class="mt-4 flex justify-around align-center">
        <v-card
          height="75"
          class="d-inherit align-center"
          color="primary-darken-1"
          prepend-icon="mdi-email"
          title="Email Address"
          subtitle="62143111@g.cmru.ac.th"
        />
        <v-card
          width="300"
          color="primary"
          prepend-icon="mdi-email"
          title="Contact Address"
          text="มหาวิทยาลัยราชภัฏเชียงใหม่ 202 ถนน ช้างเผือก ตำบลช้างเผือก อำเภอเมืองเชียงใหม่ เชียงใหม่ 50300"
        />
      </div>
      <div class="flex justify-center mt-4 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13289.471400971996!2d98.98483797386379!3d18.801452490241097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3aeb73575db7%3A0xa61747978750d27c!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lij4Liy4LiK4Lig4Lix4LiP4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1675528696482!5m2!1sth!2sth"
          width="400"
          height="300"
          style="border:0;"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
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
