#!/bin/bash

# 算法博客一键部署脚本
set -e  # 遇到错误立即退出

echo ""
echo "🚀 开始部署算法博客..."
echo "========================================"

# 检查Node.js版本
echo "📋 检查环境..."
node_version=$(node -v | cut -d'v' -f2)
echo "当前Node.js版本: $node_version"

# 安装依赖
echo "📦 安装依赖包..."
npm install

# 构建项目
echo "🏗️  构建博客..."
if npm run docs:build; then
    echo "✅ 构建成功"
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi

# 检查构建结果
if [ ! -d "docs/.vitepress/dist" ]; then
    echo "❌ 构建目录不存在，构建可能失败"
    exit 1
fi

echo "📁 构建文件检查:"
ls -la docs/.vitepress/dist/ | head -10

# Git操作
echo "🔧 配置Git..."
git config --local user.name "GitHub Actions"
git config --local user.email "actions@github.com"

echo "📝 提交更改..."
git add .

# 检查是否有更改需要提交
if git diff-index --quiet HEAD --; then
    echo "📌 没有检测到文件更改"
else
    git commit -m "自动更新: $(date +'%Y年%m月%d日 %H:%M:%S') - 算法博客内容更新" || echo "⚠️ 提交可能无新更改"
fi

echo "📤 推送到GitHub..."
if git push origin main; then
    echo "✅ 推送成功"
else
    echo "❌ 推送失败，尝试强制推送"
    git push -f origin main
fi

echo ""
echo "========================================"
echo "🎉 博客部署完成!"
echo "🌐 访问地址: https://$(git config --get remote.origin.url | sed 's/.*github.com[:/]//' | sed 's/\.git//' | cut -d'/' -f1).github.io"
echo "⏰ 部署时间: $(date)"
echo "📊 下次更新: 只需运行 ./deploy.sh 即可"
echo ""

# 等待一下让用户看到信息
sleep 3