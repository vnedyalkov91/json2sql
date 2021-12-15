import { SQLComparators, SQLOperators } from '../../common/definitions';
import { IComplexCondition, ISimpleCondition } from './interfaces';

export const uppercaseAllOperators = (
  conditions: ISimpleCondition[] | IComplexCondition[],
): void => {
  for (const item of conditions) {
    if ((item as IComplexCondition).conditions) {
      item.operator = item.operator?.toUpperCase() as SQLOperators | SQLComparators;
      uppercaseAllOperators((item as IComplexCondition).conditions);
    } else {
      item.operator = item.operator?.toUpperCase() as SQLOperators | SQLComparators;
    }
  }
};
