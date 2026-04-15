export type Id = string;

export type BaseEntity = {
  id: Id;
  createdAt: Date;
  updatedAt: Date;
};

export type SelectOption<T = string> = {
  label: string;
  value: T;
};

export type DateRange = {
  from?: Date;
  to?: Date;
};

export type StatusOption<TStatus extends string = string> = {
  label: string;
  value: TStatus;
  color: string;
};

export type Nullable<T> = T | null;

export type Maybe<T> = T | null | undefined;
