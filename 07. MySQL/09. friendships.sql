-- Crea una base de datos llamada "amigos" y luego importe friends.sql. Esto creará dos nuevas tablas: 
--usuarios y amistades. Usando el siguiente ERD como referencia, 
--escribe una consulta SQL que devuelva una lista de usuarios junto con los nombres de sus amigos.

SELECT users.first_name as first_name, users.last_name as Last_name, user2.first_name as friend_first_name, 
user2.last_name as friend_last_name FROM users 
LEFT JOIN friendships ON users.id = friendships.user_id 
LEFT JOIN users as user2 ON friendships.friend_id = user2.id;

--1. Devuelva a todos los usuarios que son amigos de Kermit, asegúrese de que sus nombres se muestren 
--en los resultados.

SELECT users.first_name as first_name, users.last_name as Last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name FROM users
    -> LEFT JOIN friendships ON users.id = friendships.user_id
    -> LEFT JOIN users as user2 ON friendships.friend_id = user2.id
    -> where user2.id = 4;

--2. Devuelve el recuento de todas las amistades.
SELECT user2.first_name as friend_first_name, user2.last_name as friend_last_name FROM users
    -> LEFT JOIN friendships ON users.id = friendships.user_id
    -> LEFT JOIN users as user2 ON friendships.friend_id = user2.id;

--3. Descubre quién tiene más amigos y devuelve el recuento de sus amigos.
SELECT users.first_name as first_name, users.last_name as Last_name, user2.first_name as friend_first_name,
    -> user2.last_name as friend_last_name FROM users
    -> LEFT JOIN friendships ON users.id = friendships.user_id
    -> LEFT JOIN users as user2 ON friendships.friend_id = user2.id
    -> where users.id = 1;

--4. Crea un nuevo usuario y hazlos amigos de Eli Byers, Kermit The Frog y Marky Mark.
INSERT INTO `users` (`id`, `first_name`, `last_name`, `created_at`) VALUES (6, 'Nicolas', 'Mora', NOW());
INSERT INTO `friendships` (`id`, `user_id`, `friend_id`, `created_at`) VALUES (NULL, 6, 2, NOW());
INSERT INTO `friendships` (`id`, `user_id`, `friend_id`, `created_at`) VALUES (NULL, 6, 4, NOW());
INSERT INTO `friendships` (`id`, `user_id`, `friend_id`, `created_at`) VALUES (NULL, 6, 5, NOW());

--5. Devuelve a los amigos de Eli en orden alfabético.
SELECT user2.first_name as friend_first_name, user2.last_name as friend_last_name FROM users 
LEFT JOIN friendships ON users.id = friendships.user_id 
LEFT JOIN users as user2 ON friendships.friend_id = user2.id
where users.id = 2
order by user2.first_name asc;

--6. Eliminar a Marky Mark de los amigos de Eli.
DELETE FROM `friendships` WHERE `friendships`.`id` = 5;

--7. Devuelve todas las amistades, mostrando solo el nombre y apellido de ambos amigos
SELECT users.first_name as First_name, users.last_name as Last_name, 
user2.first_name as friend_first_name, user2.last_name as friend_last_name FROM users 
LEFT JOIN friendships ON users.id = friendships.user_id 
LEFT JOIN users as user2 ON friendships.friend_id = user2.id;
