import * as Joi from 'joi';
import { SQLComparators, SQLOperators } from '../../common/definitions';

const fieldSchema = Joi.string().required().disallow(null, '').pattern(/^[0-9a-zA-Z\.]+$/);

const comparators = [...Object.keys(SQLComparators)];

const operators = [...Object.keys(SQLOperators)];

const equalNotEqualSchema = Joi.alternatives(
  Joi.string().required().disallow(null, ''),
  Joi.number().required().disallow(null),
  Joi.date().required().disallow(null),
  Joi.number().required().allow(null),
  Joi.bool().required(),
);

const comparatorsSchema = Joi.alternatives(
  Joi.number().required().disallow(null),
  Joi.date().required().disallow(null),
);

const betweenSchema = Joi.array().items(comparatorsSchema).min(2).max(2).required();

export const simpleConditionSchema: Joi.ObjectSchema = Joi.object().keys({
  operator: Joi.string()
    .valid(...comparators)
    .required()
    .disallow(null, ''),
  field: fieldSchema,
  value: Joi.any()
    .when('operator', [
      // EQUAL, '=', NOTEQUAL, '!=', '<>'
      ...[
        {
          is: [
            'EQUAL',
            SQLComparators['='],
            'NOTEQUAL',
            SQLComparators['!='],
            SQLComparators['<>'],
          ],
          then: equalNotEqualSchema.required(),
        },
      ],
      // GREATERTHAN, '>', LESSTHAN, '<', GREATERTHANOREQUAL, '>=', LESSTHANOREQUAL, '<='
      ...[
        {
          is: [
            'GREATERTHAN',
            SQLComparators['>'],
            'LESSTHAN',
            SQLComparators['<'],
            'GREATERTHANOREQUAL',
            SQLComparators['>='],
            'LESSTHANOREQUAL',
            SQLComparators['<='],
          ],
          then: comparatorsSchema.required(),
        },
      ],
      // BETWEEN
      ...[
        {
          is: SQLComparators.BETWEEN,
          then: betweenSchema.required(),
        },
      ],
      // LIKE
      ...[
        {
          is: SQLComparators.LIKE,
          then: Joi.string().required().disallow(''),
        },
      ],
      // IN, NOT IN
      ...[
        {
          is: [SQLComparators.IN, SQLComparators['NOT IN']],
          then: Joi.array().items(equalNotEqualSchema).min(1).required(),
        },
      ],
      // IS, IS NOT
      ...[
        {
          is: [SQLComparators.IS, SQLComparators['IS NOT']],
          then: Joi.number().required().allow(null),
        },
      ],
    ])
    .required(),
});

export const complexConditionSchema: Joi.ObjectSchema = Joi.object()
  .keys({
    operator: Joi.string()
      .valid(...operators)
      .required()
      .disallow(null, ''),
    conditions: Joi.array()
      .items(
        Joi.alternatives().try(
          simpleConditionSchema,
          Joi.link('#complexConditionSchema'),
        ),
      )
      .required()
      .min(2),
  })
  .id('complexConditionSchema');
