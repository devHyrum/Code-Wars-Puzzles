-- # write your SQL statement here: you are given a table 'fakebin' with column 'x', return a table with column 'x' and your result in a column named 'res'.

SELECT x,
       regexp_replace(regexp_replace(x, '[0-4]', '0', 'g'), '[5-9]', '1', 'g') AS res
FROM fakebin;