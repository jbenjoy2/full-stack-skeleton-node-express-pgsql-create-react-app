

-- STOP! REPLACE {DB_NAME} with the desired name for your database

\echo 'Delete and recreate {DB_NAME} db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE IF EXISTS {DB_NAME};
CREATE DATABASE {DB_NAME};
\connect {DB_NAME}

\i schema.sql
\i seed.sql

\echo 'Delete and recreate {DB_NAME}_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE IF EXISTS {DB_NAME}_test;
CREATE DATABASE {DB_NAME}_test;
\connect {DB_NAME}_test

\i schema.sql