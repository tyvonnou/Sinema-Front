-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 12 Mars 2020 à 20:55
-- Version du serveur :  5.7.29-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `movies`
--

-- --------------------------------------------------------

--
-- Structure de la table `Film`
--

CREATE TABLE `Film` (
  `FilmID` int(11) NOT NULL,
  `FilmTitle` varchar(255) NOT NULL,
  `FilmDescription` varchar(255) NOT NULL,
  `FilmReleaseDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Film`
--

INSERT INTO `Film` (`FilmID`, `FilmTitle`, `FilmDescription`, `FilmReleaseDate`) VALUES
(1, 'Shrek', 'Best movie of the decade', '2001-05-16'),
(2, 'Shrek 2', 'Second Best Movie of the decade', '2004-05-19'),
(3, 'Shrek le troisième', 'Third Best Movie of the decade', '2007-05-17'),
(4, 'Shrek 4, il était une fin', 'Shreeeeeek', '2010-05-16'),
(5, 'Joyeux Noël Shrek !', 'Shrek fête Noël et on adore ça', '2007-11-28'),
(6, 'Shrek the Musical', 'Shrek the Musical', '2016-09-17');

-- --------------------------------------------------------

--
-- Structure de la table `Note`
--

CREATE TABLE `Note` (
  `NoteID` int(11) NOT NULL,
  `NoteValue` int(11) NOT NULL,
  `FilmID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Picture`
--

CREATE TABLE `Picture` (
  `PictureID` int(11) NOT NULL,
  `PictureLocation` varchar(255) NOT NULL,
  `PictureContentType` varchar(254) NOT NULL,
  `FilmID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `UserInfo`
--

CREATE TABLE `UserInfo` (
  `UserID` int(11) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `UserPassword` varchar(255) NOT NULL,
  `UserIsAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Film`
--
ALTER TABLE `Film`
  ADD PRIMARY KEY (`FilmID`);

--
-- Index pour la table `Note`
--
ALTER TABLE `Note`
  ADD PRIMARY KEY (`NoteID`),
  ADD KEY `FilmID` (`FilmID`);

--
-- Index pour la table `Picture`
--
ALTER TABLE `Picture`
  ADD PRIMARY KEY (`PictureID`),
  ADD KEY `FilmID` (`FilmID`);

--
-- Index pour la table `UserInfo`
--
ALTER TABLE `UserInfo`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Film`
--
ALTER TABLE `Film`
  MODIFY `FilmID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `Note`
--
ALTER TABLE `Note`
  MODIFY `NoteID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Picture`
--
ALTER TABLE `Picture`
  MODIFY `PictureID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `UserInfo`
--
ALTER TABLE `UserInfo`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Note`
--
ALTER TABLE `Note`
  ADD CONSTRAINT `Note_ibfk_1` FOREIGN KEY (`FilmID`) REFERENCES `Film` (`FilmID`);

--
-- Contraintes pour la table `Picture`
--
ALTER TABLE `Picture`
  ADD CONSTRAINT `Picture_ibfk_1` FOREIGN KEY (`FilmID`) REFERENCES `Film` (`FilmID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
