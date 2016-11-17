// QUESTION : How many forms (of all types) were submitted ?

// CA :

`
WITH (
  SELECT 'vehicle' || id as id
  FROM vehicle_forms
  UNION
  SELECT 'station' || id as id
  FROM station_forms
) AS table1

SELECT COUNT(DISTINCT id)
FROM table1
`

// AA :

`
SELECT COUNT(DISTINCT id)
FROM submitted_forms
`
