/**
 * Data types
 */

export interface Creation {
  id: number
  category_id: number
  title: string
  img_url: string
}

/**
 * State types
 */

export interface CreationState {
  readonly data: Creation[]
  readonly isLoading: boolean
  readonly dataFetched: boolean
}
