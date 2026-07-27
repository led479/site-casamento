<template>
  <div class="flex flex-col items-center">
    <!-- Faixa fixa que cobre a status bar do Safari com a cor da imagem -->
    <div
      class="fixed top-0 left-0 right-0 z-50"
      :style="{ height: 'env(safe-area-inset-top)', backgroundColor: '#7a8f96' }"
    />

    <section
      v-if="grupo"
      class="flex flex-col items-center justify-between w-full min-h-dvh bg-cover bg-center px-4 pb-[calc(env(safe-area-inset-bottom)+2.5rem)] pt-[calc(env(safe-area-inset-top)+2.5rem)]"
      :style="{ backgroundImage: `url(${MainBg})` }"
    >
      <Logo class="size-80" />
      <DrawerConfirmar :nome-grupo="convidado" :convidados="grupo.convidados" />
    </section>
    <section v-else>
      não há convidados/url bugada
    </section>
  </div>
</template>

<script setup lang="ts">
import Logo from '~/assets/logo.svg'
import MainBg from '~/assets/images/main-bg.webp'

const route = useRoute()

const convidado = computed(() => {
  const value = route.params.convidado
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
})

const grupo = computed(() => buscarGrupo(convidado.value))

if (convidado.value && !grupo.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Convite não encontrado',
  })
}
</script>
