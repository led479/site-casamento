<template>
  <Drawer :open="open" @update:open="$emit('update:open', $event)">
    <DrawerContent>
      <div class="h-[80vh] pb-10 pt-5">
        <FormConfirmar v-bind="{ nomeGrupo, convidados }" />
      </div>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerContent,
} from '@/components/ui/drawer'

defineProps<{
  open: boolean
  nomeGrupo: string
  convidados: { nome: string }[]
}>()

defineEmits<{
  'update:open': [value: boolean]
}>()
</script>
