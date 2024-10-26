-- # write your SQL statement here: you are given a table 'booltoword' with column 'bool', return a table with column 'bool' and your result in a column named 'res'.

SELECT bool,
       CASE WHEN bool THEN 
       'Yes' 
       ELSE 
       'No' 
       END 
       AS res
FROM booltoword;

-- Other example
-- SELECT
--     nome,
--     nota,
--     CASE
--         WHEN nota >= 9 THEN 'Excelente'
--         WHEN nota >= 7 THEN 'Bom'
--         WHEN nota >= 5 THEN 'Regular'
--         ELSE 'Insuficiente'
--     END AS classificacao
-- FROM alunos;