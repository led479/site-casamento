<template>
  <div class="flex flex-col items-center gap-4 pb-10">
    <section class="flex items-center justify-center relative overflow-hidden h-screen w-full">
      <img :src="MainBg" class="absolute h-full w-full object-cover">
      <Logo class="size-80 z-10" />
    </section>

    <section v-if="grupo" class="w-full px-4">
      <div w-full max-w-md>
        <DrawerConfirmar :nome-grupo="convidado" :convidados="grupo.convidados" />
      </div>
    </section>
    <section v-else>
      não há convidados/url bugada
    </section>
  </div>
</template>

<script setup lang="ts">
import Logo from '~/assets/logo.svg'
import MainBg from '~/assets/images/main-bg.png'

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
