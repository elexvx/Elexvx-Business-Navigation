// SEO 配置文件
export interface SEOConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultImage: string;
  twitterHandle: string;
  author: string;
  keywords: string[];
  language: string;
  locale: string;
}

export const seoConfig: SEOConfig = {
  siteName: "企业外链综合管理平台",
  siteDescription: "宏翔商道企业外链综合管理平台是综合管理企业内外常用网站的导航平台，旨在为员工提供一站式的工作入口，提升工作效率",
  siteUrl: "https://nav.elexvx.com/", // 请修改为您的实际域名
  defaultTitle: "宏翔商道 - 企业外链综合管理平台",
  titleTemplate: "%s | 外链综管平台",
  defaultImage: "/og-image.jpg", // 请添加您的 OG 图片
  twitterHandle: "@yourhandle", // 请修改为您的 Twitter 账号
  author: "信息研发部",
  keywords: [
    "企业导航",
    "工具导航",
    "开发工具",
    "设计资源",
    "云服务",
    "项目管理",
    "在线工具",
    "资源导航"
  ],
  language: "zh-CN",
  locale: "zh_CN"
};

// 页面特定的 SEO 配置
export interface PageSEO {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
  canonical?: string;
}

// 生成完整的页面标题
export function generatePageTitle(pageTitle?: string): string {
  if (!pageTitle) return seoConfig.defaultTitle;
  return seoConfig.titleTemplate.replace('%s', pageTitle);
}

// 生成完整的页面描述
export function generatePageDescription(pageDescription?: string): string {
  return pageDescription || seoConfig.siteDescription;
}

// 生成关键词字符串
export function generateKeywords(pageKeywords?: string[]): string {
  const allKeywords = [...seoConfig.keywords, ...(pageKeywords || [])];
  return [...new Set(allKeywords)].join(', ');
}

// 生成完整的 URL
export function generateCanonicalUrl(path: string): string {
  return `${seoConfig.siteUrl}${path}`;
}