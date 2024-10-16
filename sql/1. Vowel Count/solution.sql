SELECT str,
    LENGTH(REGEXP_REPLACE(str, '[^aeiou]', '', 'g')) AS res
FROM
    getcount;
-- [^aeiou] -> the symbol ^ means 'not', any character that is not one of the vowels
-- '' -> It's a empty string, It's means that each character that is not one of the vowels will be  replace for the empty string
-- g -> Is a global parameter, The replacement must be in all cases