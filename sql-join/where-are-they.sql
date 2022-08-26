select "line1",
       "cities"."name" as "city",
       "district",
       "cities"."name" as "country"
  from "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId");
