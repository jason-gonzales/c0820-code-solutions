select "C"."name" as "countries",
      count("c".*) as "totalCities"
from "cities" as "c"
join "countries" as "C" using ("countryId")
group by "C"."countryId";
















-- List the number of "cities" per country in the "countries" table. There should be 35 in the United States, for example.
