DROP TABLE IF EXISTS Note, Picture, UserInfo, Film;

CREATE TABLE Film (
    FilmID int NOT NULL AUTO_INCREMENT,
    FilmDateSort Date NOT NULL,
    FilmDescription Varchar(255) NOT NULL,
    FilmName Varchar(255) NOT NULL,
    PRIMARY KEY (FilmID)
);

CREATE TABLE Picture (
    PictureID int NOT NULL AUTO_INCREMENT,
    PictureLocation Varchar(255) NOT NULL,
    FilmID int NOT NULL,
    PRIMARY KEY (PictureID),
    FOREIGN KEY (FilmID) REFERENCES Film(FilmID)
);

CREATE TABLE UserInfo (
    UserID int NOT NULL AUTO_INCREMENT,
    UserName Varchar(255) NOT NULL,
    UserPassword Varchar(255) NOT NULL,    
    UserIsAdmin Boolean NOT NULL,
    PRIMARY KEY (UserID)
);

CREATE TABLE Note (
    NoteID int NOT NULL AUTO_INCREMENT,
    NoteValue int NOT NULL,
    FilmID int NOT NULL,
    PRIMARY KEY (NoteID),
    FOREIGN KEY (FilmID) REFERENCES Film(FilmID)
);