# 企业导航平台 / Enterprise Navigation Platform

[中文](#中文文档) | [English](#english-documentation)

---

## 中文文档

### 📋 项目简介

企业导航平台是一个基于 Astro 框架开发的现代化导航网站，专为企业内部工具和资源管理而设计。平台提供了直观的分类导航、智能搜索、响应式设计和丰富的动画效果，帮助团队快速访问常用工具和资源。

### ✨ 核心特性

- **🎨 现代化设计**：采用 Tailwind CSS，支持暗色模式，具有精美的动画效果
- **📱 响应式布局**：完美适配桌面端、平板和移动设备
- **🔍 智能导航**：侧边栏分类导航，支持手风琴展开/收起效果
- **⚡ 高性能**：基于 Astro 静态生成，加载速度极快
- **🎯 锚点跳转**：支持平滑滚动到指定分类和子分类
- **📊 实时统计**：显示链接总数、分类数量和网站状态
- **🌐 SEO 优化**：完整的 meta 标签和结构化数据
- **♿ 无障碍访问**：遵循 WCAG 标准，支持键盘导航

### 🚀 快速开始

#### 环境要求

- Node.js >= 18.0.0
- npm 或 yarn 包管理器

#### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd nav
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问应用**
   
   打开浏览器访问 `http://localhost:4321`

#### 构建部署

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 类型检查
npm run astro:check
```

### 📁 项目结构

```
src/
├── components/          # 组件目录
│   ├── Sidebar.astro    # 侧边栏导航组件
│   ├── MobileNav.astro  # 移动端导航
│   ├── SearchBox.astro  # 搜索框组件
│   └── SEOHead.astro    # SEO 头部组件
├── config/              # 配置文件
│   ├── links.ts         # 导航链接配置
│   ├── seo.ts          # SEO 配置
│   └── search.ts       # 搜索配置
├── layouts/             # 布局模板
│   └── Layout.astro     # 主布局模板
├── pages/               # 页面文件
│   └── index.astro      # 首页
└── styles/              # 样式文件
    └── global.css       # 全局样式
```

### ⚙️ 配置说明

#### 添加新的导航链接

编辑 `src/config/links.ts` 文件：

```typescript
export const navigation: NavigationCategory[] = [
  {
    category: "开发工具",
    subcategories: [
      {
        name: "代码编辑器",
        links: [
          {
            name: "VS Code",
            url: "https://code.visualstudio.com",
            description: "微软开发的免费代码编辑器"
          }
        ]
      }
    ]
  }
];
```

#### 修改 SEO 配置

编辑 `src/config/seo.ts` 文件：

```typescript
export const siteConfig = {
  title: "企业导航平台",
  description: "专业的企业级工具和资源导航平台",
  url: "https://your-domain.com",
  // ... 其他配置
};
```

### 🎨 自定义样式

项目使用 Tailwind CSS 进行样式管理，你可以：

1. **修改主题色彩**：编辑 `tailwind.config.cjs`
2. **添加自定义动画**：在组件中添加 CSS `@keyframes`
3. **调整响应式断点**：修改 Tailwind 配置

### 📱 移动端适配

- 自动检测设备类型
- 移动端显示汉堡菜单
- 触摸友好的交互设计
- 优化的字体大小和间距

### 🔧 开发工具

- **ESLint**：代码质量检查
- **Prettier**：代码格式化
- **TypeScript**：类型安全
- **Astro Check**：Astro 特定的类型检查

### 📈 性能优化

- 静态站点生成 (SSG)
- 图片自动优化
- CSS 和 JS 代码分割
- 预加载关键资源
- 最小化运行时 JavaScript

---

## English Documentation

### 📋 Project Overview

Enterprise Navigation Platform is a modern navigation website built with Astro framework, designed specifically for enterprise internal tools and resource management. The platform provides intuitive categorized navigation, intelligent search, responsive design, and rich animation effects to help teams quickly access commonly used tools and resources.

### ✨ Key Features

- **🎨 Modern Design**: Built with Tailwind CSS, supports dark mode with beautiful animations
- **📱 Responsive Layout**: Perfect adaptation for desktop, tablet, and mobile devices
- **🔍 Smart Navigation**: Sidebar category navigation with accordion expand/collapse effects
- **⚡ High Performance**: Based on Astro static generation for extremely fast loading
- **🎯 Anchor Navigation**: Supports smooth scrolling to specific categories and subcategories
- **📊 Real-time Statistics**: Displays total links, category count, and website status
- **🌐 SEO Optimized**: Complete meta tags and structured data
- **♿ Accessibility**: Follows WCAG standards with keyboard navigation support

### 🚀 Quick Start

#### Requirements

- Node.js >= 18.0.0
- npm or yarn package manager

#### Installation

1. **Clone the project**
   ```bash
   git clone <repository-url>
   cd nav
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   
   Open your browser and visit `http://localhost:4321`

#### Build & Deploy

```bash
# Build for production
npm run build

# Preview build
npm run preview

# Type checking
npm run astro:check
```

### 📁 Project Structure

```
src/
├── components/          # Components directory
│   ├── Sidebar.astro    # Sidebar navigation component
│   ├── MobileNav.astro  # Mobile navigation
│   ├── SearchBox.astro  # Search box component
│   └── SEOHead.astro    # SEO head component
├── config/              # Configuration files
│   ├── links.ts         # Navigation links configuration
│   ├── seo.ts          # SEO configuration
│   └── search.ts       # Search configuration
├── layouts/             # Layout templates
│   └── Layout.astro     # Main layout template
├── pages/               # Page files
│   └── index.astro      # Homepage
└── styles/              # Style files
    └── global.css       # Global styles
```

### ⚙️ Configuration

#### Adding New Navigation Links

Edit `src/config/links.ts` file:

```typescript
export const navigation: NavigationCategory[] = [
  {
    category: "Development Tools",
    subcategories: [
      {
        name: "Code Editors",
        links: [
          {
            name: "VS Code",
            url: "https://code.visualstudio.com",
            description: "Free code editor developed by Microsoft"
          }
        ]
      }
    ]
  }
];
```

#### Modifying SEO Configuration

Edit `src/config/seo.ts` file:

```typescript
export const siteConfig = {
  title: "Enterprise Navigation Platform",
  description: "Professional enterprise-level tools and resource navigation platform",
  url: "https://your-domain.com",
  // ... other configurations
};
```

### 🎨 Custom Styling

The project uses Tailwind CSS for style management. You can:

1. **Modify theme colors**: Edit `tailwind.config.cjs`
2. **Add custom animations**: Add CSS `@keyframes` in components
3. **Adjust responsive breakpoints**: Modify Tailwind configuration

### 📱 Mobile Adaptation

- Automatic device type detection
- Mobile hamburger menu display
- Touch-friendly interaction design
- Optimized font sizes and spacing

### 🔧 Development Tools

- **ESLint**: Code quality checking
- **Prettier**: Code formatting
- **TypeScript**: Type safety
- **Astro Check**: Astro-specific type checking

### 📈 Performance Optimization

- Static Site Generation (SSG)
- Automatic image optimization
- CSS and JS code splitting
- Critical resource preloading
- Minimal runtime JavaScript

---

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please create an issue in the repository.
