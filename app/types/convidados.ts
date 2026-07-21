export interface Convidado {
  nome: string
}

export interface GrupoConvidados {
  convidados: Convidado[]
}

export interface PessoaPresenca {
  nome: string
  vai: boolean
}