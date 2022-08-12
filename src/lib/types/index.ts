export interface ForwardPagingMeta {
  pagingType: 'forward';
  after?: string;
  first: number;
}

export interface BackwardPagingMeta {
  pagingType: 'backward';
  before?: string;
  last: number;
}

export interface NonePagingMeta {
  pagingType: 'none';
}

export type PagingMeta =
  | ForwardPagingMeta
  | BackwardPagingMeta
  | NonePagingMeta;

export interface PaginatedParameters {
  limit?: number;
  offset?: number;
}
