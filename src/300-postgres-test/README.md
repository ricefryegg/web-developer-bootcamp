# RESTful API with Node.js and dockered PostgreSQL

## Postgres

1. Create / start container

    ```sh
    docker run \
        --mount type=volume,src=pgsql,dst=/var/lib/postgresql/data \
        -e POSTGRES_PASSWORD=[posgres_pwd] \
        -p 5432:5432 \
        --name pg \
        --rm \
        -d \
        postgres
        
    docker run ^
        --mount type=volume,src=pgsql,dst=/var/lib/postgresql/data ^
        -e POSTGRES_PASSWORD=[posgres_pwd] ^
        -p 5432:5432 ^
        --name pg ^
        --rm ^
        -d ^
        postgres
    ```

    - Params description
        - POSTGRES_PASSWORD=[pwd]: pwd for user "postgres", also the default root user
        - data persistence
            - -v /host/path:/var/lib/postgresql/data
            - --mount type=volume,src=[vol_name],dst=/var/lib/postgresql/data
                - To create: `docker volume create pgsql`

        - Ref: https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198


1. First time set up

    ```sh
    docker exec -it pg bash     # Attach to container

    psql postgres               # connect to the default "postgres" db in psql terminal
    postgres=# \conninfo        # check connection

    postgres=# CREATE ROLE user_name WITH LOGIN PASSWORD 'password';  
    postgres=# ALTER ROLE user_name CREATEDB;
    postgres=# \du              # create user, assign role, and list users
    postgres=# \q

    psql -d postgres -U user_name       # re-conn to db NOT using root user

    postgres=> CREATE DATABASE db_name;
    postgres=> \list
    postgres=> \c db_name       # create, list all and connect to db_name

    db_name=> CREATE TABLE tb_name <schema>;
    db_name=> INSERT INTO tb_name <data>;
    db_name=> SELECT * FROM tb_name;    # create table, insert data, and check data
    ```


1. PostgreSQL CLI references
    - `psql -U postgres`
    - commands
        - `\conninfo`   
        - `CREATE ROLE user WITH LOGIN PASSWORD 'pwd';` create user
        - `\du`                                         list roles
        - `ALTER ROLE user CREATEDB;`   change user
        - `CREATE DATABASE db_name;`    create db
        - `\list`                       list db
        - `\c db_name`                  change db
        - `CREATE TABLE tb_name <schema>;`  create table
        - `\dt`                             list tables
        - `INSERT INTO tb_name <data>;` insert data
        - `SELECT * FROM tb_name;`      list data
        - `\q`  exit
    - Ref: https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/

## Node.js

1. Install dependencies
    - `npm i -- save express pg`


1. Create routes: see `queries.js`


1. Access API
    - GET: browser, http://localhost:3000/users
    - POST
        
        ```sh
        curl --data "name=Elaine&email=elaine@example.com" \
            http://localhost:3000/users
        ```
        
    - PUT
        
        ```sh
        curl -X PUT -d "name=Kramer" -d "email=kramer@example.com" \
            http://localhost:3000/users/1
        ```

    - DELETE: `curl -X "DELETE" http://localhost:3000/users/1`
        
