-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-12-2021 a las 11:31:35
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ciclog29bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reportes`
--

CREATE TABLE `reportes` (
  `Codigo` int(121) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `Producto` varchar(121) NOT NULL,
  `Valor` varchar(121) NOT NULL,
  `Lugar_destino` varchar(121) DEFAULT NULL,
  `Identificador_usuario` int(121) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reportes`
--

INSERT INTO `reportes` (`Codigo`, `Fecha`, `Hora`, `Producto`, `Valor`, `Lugar_destino`, `Identificador_usuario`) VALUES
(1, '0000-00-00', '01:24:00', 'Arroz', '500000', 'Medellin', 1000000001),
(2, '0000-00-00', '01:25:00', 'Pollo', '1200000', 'Pasto', 1000000001),
(3, '0000-00-00', '05:09:00', 'Jabon', '3000000', 'Bogota', 1000000001),
(4, '0000-00-00', '05:10:00', 'Detergente', '2050000', 'Bucaramanga', 1000000002),
(5, '0000-00-00', '22:10:00', 'Crane', '2000500', 'Suiza', 1000000001);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD PRIMARY KEY (`Codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reportes`
--
ALTER TABLE `reportes`
  MODIFY `Codigo` int(121) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
