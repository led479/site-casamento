<template>
  <Drawer :open="open" @update:open="$emit('update:open', $event)">
    <DrawerContent>
      <div class="flex flex-col items-center gap-6 px-6 pb-10 pt-6 text-center">
        <DrawerHeader class="p-0">
          <DrawerTitle class="text-lg font-semibold">Contribuir para a lua de mel</DrawerTitle>
          <DrawerDescription class="text-sm opacity-70">
            Use a chave Pix abaixo para fazer sua contribuição. Ficamos muito felizes com o carinho!
          </DrawerDescription>
        </DrawerHeader>

        <!-- Copia e cola (prioridade mobile) -->
        <div class="flex w-full flex-col gap-2">
          <p class="text-xs font-medium uppercase tracking-wide opacity-50">Chave Pix (e-mail)</p>
          <div class="flex items-center gap-2 rounded-xl border border-p6-dark-gray/20 bg-white/60 px-4 py-3">
            <span class="flex-1 text-left font-mono text-sm select-all">{{ PIX_KEY }}</span>
            <button
              class="shrink-0 rounded-lg p-1.5 transition-colors hover:bg-p6-dark-gray/10 active:bg-p6-dark-gray/20"
              :aria-label="copied ? 'Copiado!' : 'Copiar chave Pix'"
              @click="copyKey"
            >
              <Check v-if="copied" class="h-4 w-4" />
              <Copy v-else class="h-4 w-4" />
            </button>
          </div>
          <Transition name="fade">
            <p v-if="copied" class="text-xs text-green-600 font-medium">✓ Chave copiada!</p>
          </Transition>
        </div>

        <Button class="w-full max-w-sm" size="lg" @click="copyKey">
          {{ copied ? '✓ Copiado!' : 'Copiar chave Pix' }}
        </Button>

        <!-- QR Code (secundário) -->
        <div class="flex flex-col items-center gap-2">
          <button
            class="text-xs underline underline-offset-2 opacity-50 hover:opacity-75 transition-opacity"
            @click="showQr = !showQr"
          >
            {{ showQr ? 'Ocultar QR Code' : 'Mostrar QR Code' }}
          </button>
          <Transition name="fade">
            <div v-if="showQr" class="flex flex-col items-center gap-2 pt-1">
              <img
                :src="QrCodePix"
                alt="QR Code Pix"
                class="h-44 w-44 rounded-xl border border-p6-dark-gray/20 bg-white p-2"
              >
              <p class="text-xs opacity-40">Aponte a câmera do seu app de banco</p>
            </div>
          </Transition>
        </div>

        <DrawerClose as-child>
          <Button variant="ghost" class="w-full text-sm opacity-50" @click="$emit('update:open', false)">
            Fechar
          </Button>
        </DrawerClose>
      </div>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import { Copy, Check } from '@lucide/vue'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import QrCodePix from '~/assets/new/qrcode-pix.png'

const PIX_KEY = 'giuliadbem@gmail.com'

defineProps<{
  open: boolean
}>()

defineEmits<{
  'update:open': [value: boolean]
}>()

const copied = ref(false)
const showQr = ref(false)

async function copyKey() {
  try {
    await navigator.clipboard.writeText(PIX_KEY)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2500)
  }
  catch {
    const el = document.createElement('input')
    el.value = PIX_KEY
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2500)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
