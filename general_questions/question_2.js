// QUESTION : What ratio of all forms have standing=true ?

// CA :

`
WITH (
  SELECT
    'vehicle' || id as id,
    standing as standing
  FROM vehicle_forms
  UNION
  SELECT
    'station' || id as id,
    standing as standing
  FROM station_forms
) AS table1,

SELECT AVG(
  CASE
    WHEN table1.standing = true
      THEN 1
    WHEN table1.standing = false
      THEN 0
  END
) as ratio
`

// AA :

`
SELECT AVG(
  CASE
    WHEN fvs.boolean_value = true
      THEN 1
    WHEN fvs.boolean_value = false
      THEN 0
  END
) as ratio
FROM submitted_forms sfs
JOIN form_values fvs
  ON sfs.id = fvs.submitted_form_id
JOIN form_fields ffs
  ON fvs.form_field_id = ffs.id
WHERE ffs.name = 'standing'
`
