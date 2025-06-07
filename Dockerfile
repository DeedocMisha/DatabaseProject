# Backend build
FROM node:20-bullseye AS backend
WORKDIR /app
COPY backend/package*.json backend/.yarnrc.yml backend/.yarn/ ./
RUN corepack enable && corepack prepare yarn@3.4.1 --activate && yarn install
COPY backend/ .
RUN yarn build

# Frontend build
FROM node:20-bullseye AS frontend
WORKDIR /frontend
COPY frontend/package*.json frontend/.yarnrc.yml frontend/.yarn/ ./
RUN corepack enable && corepack prepare yarn@3.4.1 --activate && yarn install
COPY frontend/ .
RUN yarn build

# Runtime
FROM node:20-bullseye
WORKDIR /app

# Копируем бэкенд
COPY --from=backend /app/dist ./dist
COPY --from=backend /app/node_modules ./node_modules
COPY --from=backend /app/package*.json ./


COPY --from=frontend /frontend/dist ./public

EXPOSE 7001
CMD ["node", "dist/main"]
