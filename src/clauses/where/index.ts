import { IComplexCondition, ISimpleCondition } from './interfaces';
import { uppercaseAllOperators } from './services';

export default (conditions: ISimpleCondition[] | IComplexCondition[]) => {
  uppercaseAllOperators(conditions);
};
