select "name" as "category",
      count(*) as "apperance"
from "categories"
join "filmCategory" using ("categoryId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actorId" = 178
group by "categories"."name";





-- List the categories of movies (and how many) that 'Lisa Monroe' appeared in. She appeared in a lot of films! Your results should include 3 Sports films and 2 Sci-Fi films, plus a lot more!
