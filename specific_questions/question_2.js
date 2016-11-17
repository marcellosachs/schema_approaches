// QUESTION : What is most common value for field X on form of type Y ? */

// CA :

`
WITH (
  SELECT
    ${field_name} as ${field_name},
    COUNT(DISTINCT id) as count

  FROM ${form_type}
  GROUP BY ${field_name}
) AS table1,
(
  SELECT MAX(count) as max_count FROM table1
) AS table2,

SELECT
  ${field_name}
FROM table1
JOIN table2
  ON table1.count = table2.max_count
`


// AA :

`
WITH (
  SELECT (
    CASE ffs.field_type
      WHEN 'string'
        THEN fvs.string_value
      WHEN 'boolean'
        THEN fvs.boolean_value
    END
  ) as ${field_name}
  COUNT(DISTINCT sfs.id) as count
  FROM submitted_forms sfs
  JOIN form_values fvs
    ON sfs.id = fvs.submitted_forms_id
  JOIN form_fields ffs
    ON fvs.form_field_id = ffs.id
  WHERE ffs.name = ${field_name}
  GROUP BY ${field_name}
) AS table1,
(
  SELECT MAX(count) as max_count FROM table1
) AS table2,

SELECT
  ${field_name}
FROM table1
JOIN table2
  ON table1.count = table2.max_count
`
