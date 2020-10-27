select "a"."line1",
        "c"."name" as "city",
        "a"."district",
        "C"."name" as "country"
from "addresses" as "a"
join "cities" as "c" using ("cityId")
join "countries" as "C" using("countryId")
