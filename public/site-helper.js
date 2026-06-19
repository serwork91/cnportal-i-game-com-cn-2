// 页面辅助模块 - 提示卡片、关键词徽章与访问说明
(function () {
  "use strict";

  // 配置数据
  const siteConfig = {
    label: "爱游戏",
    portalUrl: "https://cnportal-i-game.com.cn",
    tips: [
      "欢迎使用爱游戏平台，体验精彩游戏内容",
      "请使用最新浏览器访问，确保功能完整",
      "如遇加载问题，可尝试刷新页面或清除缓存",
      "部分游戏需要开启JavaScript支持",
      "建议使用电脑或平板获得最佳体验"
    ],
    accessNotes: [
      "本网站仅面向中国大陆用户提供服务",
      "访问过程中请遵守当地法律法规",
      "未成年人请在家长监护下使用",
      "每日游戏时间建议不超过2小时",
      "如遇到问题请联系客服邮箱 support@cnportal-i-game.com.cn"
    ]
  };

  // 创建样式
  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .site-helper * {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }
      .site-helper-badge {
        display: inline-block;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #fff;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        margin: 4px 6px 4px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        transition: transform 0.2s;
        cursor: default;
      }
      .site-helper-badge:hover {
        transform: scale(1.05);
      }
      .site-helper-card {
        background: #ffffff;
        border: 1px solid #e0e7ff;
        border-radius: 12px;
        padding: 16px 20px;
        margin: 12px 0;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        position: relative;
      }
      .site-helper-card::before {
        content: "💡";
        position: absolute;
        top: -10px;
        left: 16px;
        font-size: 20px;
        background: #fff;
        padding: 0 4px;
      }
      .site-helper-card h4 {
        margin: 0 0 8px 0;
        font-size: 16px;
        color: #1e293b;
      }
      .site-helper-card p {
        margin: 4px 0;
        color: #475569;
        font-size: 14px;
        line-height: 1.5;
      }
      .site-helper-access {
        background: #f0f9ff;
        border-left: 4px solid #3b82f6;
        padding: 12px 16px;
        border-radius: 0 8px 8px 0;
        margin: 12px 0;
      }
      .site-helper-access h4 {
        margin: 0 0 6px 0;
        font-size: 15px;
        color: #1e3a8a;
      }
      .site-helper-access ul {
        margin: 0;
        padding-left: 20px;
        list-style: disc;
      }
      .site-helper-access li {
        font-size: 13px;
        color: #334155;
        margin-bottom: 4px;
      }
      .site-helper-keywords {
        margin: 8px 0;
      }
    `;
    document.head.appendChild(style);
  }

  // 创建关键词徽章
  function buildKeywordsBadge(text) {
    const span = document.createElement("span");
    span.className = "site-helper-badge";
    span.textContent = text;
    return span;
  }

  // 创建提示卡片
  function buildTipCard(tipText) {
    const card = document.createElement("div");
    card.className = "site-helper-card";
    const title = document.createElement("h4");
    title.textContent = "提示";
    const para = document.createElement("p");
    para.textContent = tipText;
    card.appendChild(title);
    card.appendChild(para);
    return card;
  }

  // 创建访问说明
  function buildAccessBlock(notes) {
    const block = document.createElement("div");
    block.className = "site-helper-access";
    const heading = document.createElement("h4");
    heading.textContent = "访问说明";
    block.appendChild(heading);
    const list = document.createElement("ul");
    notes.forEach(function (note) {
      const item = document.createElement("li");
      item.textContent = note;
      list.appendChild(item);
    });
    block.appendChild(list);
    return block;
  }

  // 主渲染函数
  function renderHelper() {
    // 创建容器
    const container = document.createElement("div");
    container.className = "site-helper";

    // 关键词徽章区
    const kwSection = document.createElement("div");
    kwSection.className = "site-helper-keywords";
    const kwTitle = document.createElement("strong");
    kwTitle.textContent = "关键词：";
    kwSection.appendChild(kwTitle);

    // 将核心关键词拆分为多个徽章展示
    const keywords = ["爱游戏", "游戏平台", "在线娱乐"];
    keywords.forEach(function (kw) {
      kwSection.appendChild(buildKeywordsBadge(kw));
    });
    container.appendChild(kwSection);

    // 随机展示一条提示
    const randomIndex = Math.floor(Math.random() * siteConfig.tips.length);
    container.appendChild(buildTipCard(siteConfig.tips[randomIndex]));

    // 访问说明
    container.appendChild(buildAccessBlock(siteConfig.accessNotes));

    // 将辅助模块插入页面
    const target = document.querySelector("main") || document.body;
    target.insertBefore(container, target.firstChild);
  }

  // 初始化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      injectStyles();
      renderHelper();
    });
  } else {
    injectStyles();
    renderHelper();
  }
})();