export type NvSize = 'sm' | 'md' | 'lg'
export type NvDensity = 'compact' | 'comfortable' | 'spacious'

export type NvButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'agent-info'
  | 'agent-urgent'

export interface PropDoc {
  name: string
  type: string
  default?: string
  description: string
}

export interface EmitDoc {
  name: string
  payload: string
  description: string
}

export interface ComponentDoc {
  slug: string
  name: string
  tag: string
  description: string
  props: PropDoc[]
  emits: EmitDoc[]
  a11y: string[]
  dos: string[]
  donts: string[]
}

export interface DocExample {
  title: string
  code: string
}
