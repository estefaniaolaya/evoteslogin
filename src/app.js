// app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import taksRoutes from "./routes/tasks.routes.js";
import candidateRoutes from "./routes/candidateRoutes.js";

import votesRoutes from "./routes/voteRoutes.js";  // Usamos 'import' aquí

import { FRONTEND_URL } from "./config.js";  // Asegúrate de que esté configurado correctamente

const app = express();

// Configuración de CORS para permitir solicitudes desde el frontend
app.use(
  cors({
    credentials: true,  // Permite enviar cookies con la solicitud
    origin: FRONTEND_URL,  // Define el origen permitido, debe ser la URL de tu frontend
  })
);

app.use(express.json());  // Parseo de cuerpos de solicitudes JSON
app.use(morgan("dev"));  // Log de solicitudes HTTP
app.use(cookieParser());  // Analiza las cookies

// Rutas de la API
app.use("/api/auth", authRoutes);  // Ruta de autenticación
app.use("/api/tasks", taksRoutes);  // Ruta de tareas
app.use("/api/candidates", candidateRoutes);  // Ruta de candidatos
app.use("/api/votes", votesRoutes);  // Ruta de votos



// Configuración de producción (si aplica)
if (process.env.NODE_ENV === "production") {
  const path = await import("path");  // Importar dinámicamente `path` para producción
  app.use(express.static("client/dist"));  // Servir archivos estáticos del frontend en producción
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "dist", "index.html"));  // Servir la página principal de la SPA
  });
}

export default app;
