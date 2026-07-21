// utils/convidados.ts

import convidadosRaw from '~/assets/convidados.json'
import type { GrupoConvidados } from '~/types/convidados'

const convidados = convidadosRaw as GrupoConvidados[]

function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

export function buscarGrupo(nome: string): GrupoConvidados | null {
  const nomeNormalizado = normalize(decodeURIComponent(nome))

  return (
    convidados.find(grupo =>
      grupo.convidados.some(
        ({ nome }) => normalize(nome) === nomeNormalizado
      )
    ) ?? null
  )
}