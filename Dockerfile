# Usa la imagen base de Node.js
FROM node:18

# Define el directorio de trabajo
WORKDIR /myapp

# Copia el archivo package.json y package-lock.json (si existe)
COPY package.json .

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Comando para iniciar la aplicación
CMD ["npm", "start"]
