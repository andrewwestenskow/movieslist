DROP TABLE IF EXISTS movies;

create table movies (
  movies_id serial primary key,
  title varchar(100),
  director varchar(100),
  rating integer
);

insert into movies (title, director, rating)
values ('There Will Be Blood', 'Paul Thomas Anderson', 10), 
('Space Jam', 'Michael Jordan', 15),
('The Dark Knight', 'Christopher Nolan', 9),
('Anchorman', 'Adam McKay', 6),
('The Grand Budapest Hotel', 'Wes Anderson', 9),
('Blade Runner 2049', 'Denis Villenueve', 10),
('The Lighthouse', 'Robert Eggers', 500);

select * from movies;