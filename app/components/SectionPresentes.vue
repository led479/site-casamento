<template>
  <section
    class="relative min-h-[100vh] flex flex-col items-center justify-center w-full bg-cover bg-center px-8 py-14 text-p6-dark-gray" :style="{ backgroundImage: `url(${Pg6Fundo})` }"
  >
    <div class="flex flex-col items-center h-full w-full bg-contain bg-no-repeat bg-center pt-24 text-center max-w-sm min-h-[500px]" :style="{ backgroundImage: `url(${Pg6Borda})` }">
      <div class="flex flex-col items-center gap-6 leading-tight text-sm">
        <img :src="Pg6Titulo" alt="Sobre Presentes" width="224" >
        <div class="flex flex-col items-center gap-5 max-w-[200px] opacity-75">
          <p>O maior presente será poder compartilhar este dia com você.</p>
          <p>Já dividimos a vida juntos há alguns anos, e hoje temos tudo o que precisamos para nosso lar.</p>
          <p>Se quiserem nos presentear, ficaremos muito felizes com uma contribuição para a nossa lua de mel.</p>
        </div>
        <Button class="w-full max-w-[200px] bg-transparent py-6 border-p6-dark-gray/20 border mt-3" variant="outline" size="lg" @click="pixOpen = true">
          CONTRIBUIR
        </Button>
      </div>
    </div>
  </section>

  <DrawerPix v-model:open="pixOpen" />
</template>

<script setup lang="ts">
import Pg6Borda from '~/assets/new/pg6_borda.webp'
import Pg6Fundo from '~/assets/new/pg6_fundo.webp'
import Pg6Titulo from '~/assets/new/pg6_titulo.webp'
import { Button } from '~/components/ui/button'

const pixOpen = ref(false)
</script>
