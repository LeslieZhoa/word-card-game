#!/bin/bash

# 安装依赖（如果 node_modules 不存在）
if [ ! -d "node_modules" ]; then
    echo "正在安装依赖..."
    npm install
fi

# 启动应用
echo "正在启动应用..."
npm start 