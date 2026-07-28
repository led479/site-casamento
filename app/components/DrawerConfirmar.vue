<template>
  <Drawer :open="open" @update:open="$emit('update:open', $event)">
    <DrawerContent>
      <div class="h-[80vh] pb-10 pt-5">
        <FormConfirmar v-bind="{ nomeGrupo, convidados }" @success="onSuccess" @ja-respondeu="$emit('jaRespondeu', $event)" />
      </div>
    </DrawerContent>
  </Drawer>

  <Dialog v-model:open="successOpen">
    <DialogContent class="max-w-sm text-center">
      <div class="flex flex-col items-center gap-4 py-4">
        <div class="text-4xl">🎉</div>
        <DialogTitle class="text-xl font-semibold">
          {{ atualizado ? 'Resposta atualizada!' : 'Presença confirmada!' }}
        </DialogTitle>
        <DialogDescription class="text-base">
          {{ atualizado
            ? 'Sua resposta foi atualizada. Mal podemos esperar para te ver!'
            : 'Que alegria! Mal podemos esperar para celebrar com você.' }}
        </DialogDescription>
        <Button class="mt-2 w-full" @click="successOpen = false">
          Fechar
        </Button>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerContent,
} from '@/components/ui/drawer'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

defineProps<{
  open: boolean
  nomeGrupo: string
  convidados: { nome: string }[]
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
  'jaRespondeu': [value: boolean]
}>()

const successOpen = ref(false)
const atualizado = ref(false)

function onSuccess(wasUpdate: boolean) {
  emit('update:open', false)
  atualizado.value = wasUpdate
  nextTick(() => {
    successOpen.value = true
  })
}
</script>
