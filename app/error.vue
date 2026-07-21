<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
    <h1 class="text-5xl font-bold">
      Convite não encontrado 💌
    </h1>

    <p class="max-w-md text-muted-foreground">
      Não encontramos um convite para este link.
      Verifique se o endereço está correto ou entre em contato com os noivos.
    </p>

    <Button @click="handleError">
      Voltar ao início
    </Button>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

function handleError() {
  clearError({
    redirect: '/',
  })
}
</script>