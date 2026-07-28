<template>
  <div class="flex flex-col items-center">
    <template v-if="grupo">
      <SectionHero />
      <SectionIntro />
      <SectionIgreja />
      <SectionRestaurante />
      <SectionInfo />

      <Transition name="slide-up">
        <div
          v-if="scrolled"
          class="fixed bottom-0 left-0 right-0 flex justify-center pb-[calc(env(safe-area-inset-bottom)+1.25rem)] z-50"
        >
          <Button variant="outline" size="lg" @click="drawerOpen = true">
            Confirmar presença
          </Button>
        </div>
      </Transition>

      <DrawerConfirmar v-model:open="drawerOpen" :nome-grupo="convidado" :convidados="grupo.convidados" />
    </template>
    <section v-else>
      não há convidados/url bugada
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

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

const scrolled = ref(false)
const drawerOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 80
  }, { passive: true })
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(1.5rem);
  opacity: 0;
}
</style>
