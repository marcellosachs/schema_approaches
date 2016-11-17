// QUESTION : How many forms of type X have been submitted ?

// CA :

`
SELECT COUNT(DISTINCT ID)
FROM ${form_type}
`


// AA :

`
SELECT COUNT(DISTINCT sfs.id)
FROM submitted_forms sfs
JOIN form_types fts
  ON sfs.form_type_id = fts.id
WHERE fts.name = ${form_type}
`
