<template>
  <div v-if="carregando" class="flex items-center justify-center px-4 py-10">
    <div class="size-6 animate-spin rounded-full border-2 border-current border-t-transparent opacity-50" />
  </div>

  <form v-else class="flex flex-col gap-4 justify-between h-full px-4" @submit.prevent="confirmar">
    <FieldGroup>
      <FieldSet>
        <FieldLegend variant="label">
          Quem poderá comparecer no casamento?
        </FieldLegend>
        <FieldDescription v-if="jaRespondeu">
          Você já confirmou sua presença anteriormente. Se quiser, pode atualizar sua resposta abaixo.
        </FieldDescription>
        <FieldDescription v-else>
          Marque quem poderá comparecer.
        </FieldDescription>
        <FieldGroup class="gap-3">
          <Field v-for="pessoa in pessoas" :key="pessoa.nome" orientation="horizontal">
            <Checkbox :id="`convidado-${pessoa.nome}`" v-model="pessoa.vai" />
            <FieldLabel :for="`convidado-${pessoa.nome}`" class="font-normal">
              {{ pessoa.nome }}
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
    
    <div>
      <p v-if="erro" class="text-destructive text-sm">
        {{ erro }}
      </p>
      <div v-if="enviado" class="flex flex-col gap-1">
        <p class="text-green-600">
          Presença confirmada! Muito obrigado! 🎉
        </p>
      </div>
      <Button v-if="!enviado" type="submit" size="lg" :disabled="enviando">
        {{ enviando ? 'Enviando...' : jaRespondeu ? 'Atualizar resposta' : 'Enviar' }}
      </Button>
      <Contato />
    </div>
  </form>
</template>

<script setup lang="ts">
import type { PessoaPresenca } from '~/types/convidados'
import Button from '~/components/ui/button/Button.vue'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '~/components/ui/field'
import { Checkbox } from '~/components/ui/checkbox'

const props = defineProps<{
  nomeGrupo: string
  convidados: { nome: string }[]
}>()

const { $supabase } = useNuxtApp()

const pessoas = ref<PessoaPresenca[]>(
  props.convidados.map(({ nome }) => ({ nome, vai: true })),
)

const jaRespondeu = ref(false)
const enviado = ref(false)
const erro = ref('')
const enviando = ref(false)
const carregando = ref(true)

onMounted(async () => {
  const { data: respostasExistentes } = await $supabase
    .from('rsvp')
    .select('nome, confirmado')
    .eq('grupo', props.nomeGrupo)

  if (respostasExistentes && respostasExistentes.length > 0) {
    jaRespondeu.value = true
    pessoas.value = pessoas.value.map(pessoa => {
      const salvo = respostasExistentes.find(r => r.nome === pessoa.nome)
      return salvo ? { ...pessoa, vai: salvo.confirmado } : pessoa
    })
  }

  carregando.value = false
})

async function confirmar() {
  enviando.value = true
  erro.value = ''

  const registros = pessoas.value.map(pessoa => ({
    nome: pessoa.nome,
    grupo: props.nomeGrupo,
    confirmado: pessoa.vai,
  }))

  const { error } = await $supabase
    .from('rsvp')
    .upsert(registros, { onConflict: 'nome,grupo' })

  enviando.value = false

  if (error) {
    erro.value = 'Ops, algo deu errado. Tente novamente.'
    return
  }

  enviado.value = true
}
</script>
