-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-04-2023 a las 17:57:51
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tabla`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrega`
--

CREATE TABLE `entrega` (
  `id` int(11) NOT NULL,
  `precio_total` int(11) NOT NULL,
  `voluntario` bit(1) NOT NULL,
  `usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrega_pedidos`
--

CREATE TABLE `entrega_pedidos` (
  `entrega_id` int(11) NOT NULL,
  `pedidos_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `tienda` varchar(255) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_productos`
--

CREATE TABLE `pedido_productos` (
  `pedido_id` int(11) NOT NULL,
  `productos_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `link_img` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `tienda` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `link_img`, `nombre`, `precio`, `tienda`) VALUES
(1, 'https://i.imgur.com/phtcnjL.png', 'Secreto Ibérico', 31, 'carniceriasauce@barriocovid.com'),
(3, 'https://i.imgur.com/R1kHeMp.png', 'Cinta de lomo', 6, 'carniceriasauce@barriocovid.com'),
(5, 'https://i.imgur.com/sWYWYdj.png', 'Chuletón', 16, 'carniceriasauce@barriocovid.com'),
(6, 'https://i.imgur.com/vNtQOTH.png', 'Salchicha fresca', 9, 'carniceriasauce@barriocovid.com'),
(8, 'https://i.imgur.com/C6eO2eH.pngM', 'Besugo', 26, 'pescaderiancla@barriocovid.com'),
(9, 'https://i.imgur.com/fnPXy1Q.png', 'Centollo', 32, 'pescaderiamediterraneo@barriocovid.com'),
(10, 'https://podoservice.es/2668-thickbox_default/agua-destilada-5-l.jpg', 'Agua Destilada', 2, 'drogueriacarmen@barriocovid.com'),
(11, 'https://i.imgur.com/iwaOMtq.png', 'Palometa', 12, 'pescaderiancla@barriocovid.com'),
(12, 'https://i.imgur.com/wH41bLL.png', 'Costillar de cerdo', 7, 'carniceriasauce@barriocovid.com'),
(13, 'https://i.imgur.com/dotXUsb.png', 'Percebes', 33, 'pescaderiamediterraneo@barriocovid.com'),
(14, 'https://i1.perfumesclub.com/grande/152634.jpg', 'Loewe', 50, 'drogueriacarmen@barriocovid.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_pedidos`
--

CREATE TABLE `producto_pedidos` (
  `producto_id` int(11) NOT NULL,
  `pedidos_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tienda`
--

CREATE TABLE `tienda` (
  `email` varchar(255) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `link_img` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `telefono` int(11) NOT NULL,
  `vendedor_nif` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tienda`
--

INSERT INTO `tienda` (`email`, `direccion`, `id`, `link_img`, `nombre`, `telefono`, `vendedor_nif`) VALUES
('carniceriasauce@barriocovid.com', 'Calle París, 33', 0, 'https://cdn-icons-png.flaticon.com/512/869/869676.png', 'Carnicería Sauce', 676090872, 98702341),
('drogueriacarmen@barriocovid.com', 'Calle Madrid, 39', 0, 'https://cdn-icons-png.flaticon.com/512/1059/1059219.png', 'Droguería Carmen', 632498705, 15608953),
('pescaderiamediterraneo@barriocovid.com', 'Calle Roma, 70', 0, 'https://cdn-icons-png.flaticon.com/512/2932/2932599.png', 'Pescadería Mediterráneo', 654908232, 43890761),
('pescaderiancla@barriocovid.com', 'Calle Bruselas, 18', 0, 'https://cdn-icons-png.flaticon.com/512/1581/1581785.png', 'Pescaderia Ancla', 610108990, 22334466);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nif` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `telefono` int(11) NOT NULL,
  `voluntario` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `direccion`, `email`, `nif`, `nombre`, `pass`, `telefono`, `voluntario`) VALUES
(2, 'Calle verde 10', 'user4@mail.com', 34567898, 'Rosa', '1234', 623415678, b'1'),
(3, 'Calle Perro', 'user2@mail.com', 98765434, 'paco', '1234', 675348290, b'1'),
(4, 'Calle Politecnica 6', 'userj@mail.com', 8976895, 'Jaime', '1234', 678590342, b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE `vendedor` (
  `nif` int(11) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `telefono` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `vendedor` (`nif`, `direccion`, `email`, `nombre`, `pass`, `telefono`) VALUES
(15608953, 'Calle Falsa, 555', 'carmendroguera@gmail.com', 'Carmen Droguera', '1234', 654998053),
(22334466, 'Calle Falsa, 111', 'josepescadero@gmail.com', 'Jose Pescadero', '1234', 621343210),
(22567230, 'Calle Falsa, 444', 'luisfrutero@gmail.com', 'Luis Frutero', '1234', 688905643),
(43890761, 'Calle Falsa, 666', 'sofiapescadera@gmail.com', 'Sofía Pescadera', '1234', 644902874),
(77891127, 'Calle Falsa, 333', 'paulafrutera@gmail.com', 'Paula Frutera', '1234', 655881234),
(98702341, 'Calle Falsa, 222', 'mariocarnicero@gmail.com', 'Mario Carnicero', '1234', 668905673);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `entrega`
--
ALTER TABLE `entrega`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `entrega_pedidos`
--
ALTER TABLE `entrega_pedidos`
  ADD UNIQUE KEY `UK_5kr3x618ceylxic1aldbm029q` (`pedidos_id`),
  ADD KEY `FKawml8cvtaysw8dpr2fwgsipt4` (`entrega_id`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9j00owlr2x9j776fjx1wavilw` (`tienda`);

--
-- Indices de la tabla `pedido_productos`
--
ALTER TABLE `pedido_productos`
  ADD KEY `FK9q00p33elayx84wl4im8ehr4x` (`productos_id`),
  ADD KEY `FKv1xsxti8g695nhdlbdluwo88` (`pedido_id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKa8ut2oc4b4y0pvxdgu6fff9s` (`tienda`);

--
-- Indices de la tabla `producto_pedidos`
--
ALTER TABLE `producto_pedidos`
  ADD KEY `FKqg63f620481p342viyrim6y33` (`pedidos_id`),
  ADD KEY `FKt7t1cdpji9a1k4g36sk41qt17` (`producto_id`);

--
-- Indices de la tabla `tienda`
--
ALTER TABLE `tienda`
  ADD PRIMARY KEY (`email`),
  ADD KEY `FKpmqrb3o78obtlgla4dufrhf64` (`vendedor_nif`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`nif`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `entrega`
--
ALTER TABLE `entrega`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `entrega_pedidos`
--
ALTER TABLE `entrega_pedidos`
  ADD CONSTRAINT `FKawml8cvtaysw8dpr2fwgsipt4` FOREIGN KEY (`entrega_id`) REFERENCES `entrega` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKmr8cipft98603ubqf1o1dg6bj` FOREIGN KEY (`pedidos_id`) REFERENCES `pedido` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `FK9j00owlr2x9j776fjx1wavilw` FOREIGN KEY (`tienda`) REFERENCES `tienda` (`email`);

--
-- Filtros para la tabla `pedido_productos`
--
ALTER TABLE `pedido_productos`
  ADD CONSTRAINT `FK9q00p33elayx84wl4im8ehr4x` FOREIGN KEY (`productos_id`) REFERENCES `producto` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKv1xsxti8g695nhdlbdluwo88` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `FKa8ut2oc4b4y0pvxdgu6fff9s` FOREIGN KEY (`tienda`) REFERENCES `tienda` (`email`);

--
-- Filtros para la tabla `producto_pedidos`
--
ALTER TABLE `producto_pedidos`
  ADD CONSTRAINT `FKqg63f620481p342viyrim6y33` FOREIGN KEY (`pedidos_id`) REFERENCES `pedido` (`id`),
  ADD CONSTRAINT `FKt7t1cdpji9a1k4g36sk41qt17` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`id`);

--
-- Filtros para la tabla `tienda`
--
ALTER TABLE `tienda`
  ADD CONSTRAINT `FKpmqrb3o78obtlgla4dufrhf64` FOREIGN KEY (`vendedor_nif`) REFERENCES `vendedor` (`nif`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
