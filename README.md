# 余宇颖个人网站

这是余宇颖的个人主页与数字名片。页面围绕作品、观察方式、兴趣与个人审美展开，用于求职展示。

## 本地启动

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物会输出到 `dist/`，可部署到 GitHub Pages。

## 内容维护

- 个人介绍：`src/data/profile.ts`
- 项目内容：`src/data/projects.ts`
- Favorites：`src/data/favorites.ts`
- 公开平台：`src/data/socials.ts`

请不要把含手机号、出生年月、年龄、详细地址或 MBTI 的原始简历放进 `public/`。

## 素材放置

- 源资料和分析笔记：`reference/`
- 头像、项目图、音乐相关素材：`assets/`
- 公开可访问文件：`public/`

公开简历下载文件固定为：

```text
public/downloads/yu-yuying-resume.pdf
```

它必须是脱敏版本。

## GitHub Pages

项目已包含 `.github/workflows/deploy.yml`。推送到 `main` 后，可在仓库 Settings 中开启 GitHub Pages，并选择 GitHub Actions 作为发布来源。
