select
      count(*) as "numberOfMovies",
      "genres"."name" as "genres"
  from "films"
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "actors"."actorId" = '178'
  group by "genres"."name";
