# 基于 Node.js 镜像构建应用程序
FROM node:14-alpine as builder
# 设置工作目录
WORKDIR /app
# 将项目依赖项复制到工作目录中
COPY . .
# 安装依赖项
RUN npm install
# 构建 React 项目
RUN npm run build


# 基于 Nginx 镜像构建容器
FROM nginx:alpine
# 将构建的 React 项目复制到 Nginx 默认目录中
COPY --from=builder /app/build /usr/share/nginx/html
# 暴露容器端口
EXPOSE 80
# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]
