
<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button variant="outline">
        Confirmar presença
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div class="h-[80vh] pb-10 pt-5">
        <FormConfirmar v-bind="{ nomeGrupo, convidados }" />
      </div>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer'

defineProps<{
  nomeGrupo: string
  convidados: { nome: string }[]
}>()

</script>
