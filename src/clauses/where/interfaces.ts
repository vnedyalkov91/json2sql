import { SQLComparators, SQLOperators } from '../../common/definitions';

export interface ISimpleCondition {
  operator: SQLComparators;
  field: string;
  value: string | number | null | string[] | number[] | boolean;
}

export interface IComplexCondition {
  operator: SQLOperators;
  conditions: ISimpleCondition[] | IComplexCondition[];
}
