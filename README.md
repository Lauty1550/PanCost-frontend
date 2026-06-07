# PanCost

**Sistema de gestión de costos para panaderías y emprendimientos gastronómicos.**

PanCost permite calcular automáticamente el costo de elaboración de productos a partir de los ingredientes utilizados en cada receta. Actualmente se encuentra en uso por una panadería local para gestionar sus costos de producción.

## 🎬  Preview del sistema
![Preview landing](https://github.com/Lauty1550/PanCost-frontend/releases/download/V.1.0/Preview.gif)

## 🎯 Objetivo

Determinar de forma rápida y precisa el costo real de cada receta, evitando cálculos manuales y facilitando la toma de decisiones sobre precios de venta.

## ✨ Características

* Gestión de ingredientes.
* Registro del precio y cantidad de compra.
* Creación y edición de recetas.
* Cálculo automático de costos por ingrediente.
* Cálculo del costo total de producción.
* Carga de imágenes para ingredientes y recetas.
* Interfaz responsive para PC y dispositivos móviles.

## 🛠️ Tecnologías utilizadas

### Frontend

* React
* TypeScript
* React Hook Form
* React Select
* CSS

### Backend

* Express
* TypeScript
* Prisma ORM

### Base de datos

* PostgreSQL

### Almacenamiento de imágenes

* Cloudinary

## 🏗️ Arquitectura

El sistema utiliza una arquitectura compuesta por:

* Frontend en React desplegado en Vercel.
* API REST desarrollada con Express.
* Base de datos PostgreSQL.
* Prisma como capa de acceso a datos.
* Cloudinary para almacenamiento de imágenes.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.
