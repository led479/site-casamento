<template>
  <Card class="mt-6">
    <CardHeader>
      <CardTitle>Dúvidas ou problemas?</CardTitle>
      <CardDescription>Entre em contato pelo WhatsApp</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-col gap-2">
      <a
        href="https://wa.me/5548991222111"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-base">💬</span>
        <span><span class="font-medium text-foreground">Rolf</span> · (48) 99122-2111</span>
      </a>
      <a
        href="https://wa.me/5548984344830"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-base">💬</span>
        <span><span class="font-medium text-foreground">Giulia</span> · (48) 98434-4830</span>
      </a>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
</script>
