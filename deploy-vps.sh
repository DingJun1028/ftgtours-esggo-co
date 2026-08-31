#!/bin/bash
# FTG Journey VPS 自動部署腳本
# 用法：./deploy-vps.sh

set -e

# 設定
VPS_IP="161.118.248.180"
SSH_KEY="C:/Project/ESGGO VPS/id_rsa_esggo_real"
VPS_USER="ubuntu"
DEPLOY_PATH="/var/www/ftgtours"
SERVICE_NAME="ftg-journey-api"

echo "🚀 開始 FTG Journey VPS 部署..."
echo "目標: $VPS_IP:$DEPLOY_PATH"

# 1. 檢查 SSH 金鑰是否存在
if [ ! -f "$SSH_KEY" ]; then
  echo "❌ SSH 金鑰不存在: $SSH_KEY"
  exit 1
fi

# 2. 設定金鑰權限
chmod 600 "$SSH_KEY"

# 3. 執行 SSH 部署命令
SSH_CMD="ssh -i $SSH_KEY $VPS_USER@$VPS_IP"

echo "📦 連線至 VPS 並執行部署..."

$SSH_CMD << 'EOF'
  cd $DEPLOY_PATH
  echo "📁 切換至部署目錄"
  git pull origin main
  echo "✅ git pull 完成"
  echo "📦 安裝生產依賴"
  pnpm install --production
  echo "🔄 重啟 PM2 服務"
  pm2 restart $SERVICE_NAME
  echo "⏳ 等待服務啟動..."
  sleep 3
  echo "🏥 執行健康檢查"
  curl -s -o /dev/null -w "HTTP %{http_code}" https://ftgtours.esggo.co
  echo ""
  echo "📊 PM2 狀態"
  pm2 status
EOF

echo "✅ VPS 部署完成！"

# 4. 本機健康檢查（可選）
echo "🔍 本機驗證..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://ftgtours.esggo.co)
if [ "$HTTP_CODE" = "200" ]; then
  echo "✅ 官網可達，HTTP 200"
else
  echo "⚠️ 官網返回 HTTP $HTTP_CODE，請檢查"
fi