
# --- !Ups
-- auto-generated definition
create table good
(
    id          int                  not null
        primary key,
    title       char(255)            not null,
    price       int                  not null,
    stock       int                  null,
    info        char(255)            null,
    is_delete   tinyint(1) default 0 null,
    create_time datetime             null,
    update_time datetime             null
);

-- auto-generated definition
create table good_image_connect
(
    id       int auto_increment
        primary key,
    good_id  int null,
    image_id int null
);

-- auto-generated definition
create table image
(
    id          int auto_increment
        primary key,
    name        char(255)            not null,
    is_delete   tinyint(1) default 0 null,
    create_time datetime             null,
    update_time datetime             null
);

-- auto-generated definition
create table page
(
    id          int auto_increment
        primary key,
    shop_id     int                  null,
    title       char(30)             not null,
    styleType   int                  not null,
    previewImg  char(255)            null,
    components  json                 null,
    is_delete   tinyint(1) default 0 null,
    create_time datetime             null,
    update_time datetime             null
);

-- auto-generated definition
create table shop
(
    id          int auto_increment
        primary key,
    username    char(64)             not null,
    password    char(64)             not null,
    salt        int                  not null,
    nick        char(48)             null,
    is_delete   tinyint(1) default 0 null,
    create_time datetime             null,
    update_time datetime             null,
    phone       char(20)             null,
    constraint shop_username_uindex
        unique (username)
);

-- auto-generated definition
create table user
(
    id          int auto_increment
        primary key,
    username    char(30)             not null,
    password    char(64)             not null,
    salt        char(64)             null comment '密码盐值',
    nick        char(48)             not null,
    avator      char(255)            null,
    description char(255)            null,
    phone       char(20)             null,
    email       char(50)             null,
    is_shop     tinyint(1) default 0 null,
    create_time datetime             null,
    update_time datetime             null,
    is_delete   tinyint(1) default 0 null
);

# ---!Downs
DROP TABLE user;
DROP TABLE shop;
DROP TABLE good;
DROP TABLE good_image_connect;
DROP TABLE image;
DROP TABLE page;

