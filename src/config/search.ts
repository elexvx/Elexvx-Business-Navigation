// 搜索引擎配置文件
export interface SearchEngine {
  name: string;
  displayName: string;
  baseUrl: string;
  queryParam: string;
  icon: string;
  placeholder: string;
}

export const searchEngines: SearchEngine[] = [
  {
    name: 'bing',
    displayName: 'Bing',
    baseUrl: 'https://www.bing.com/search',
    queryParam: 'q',
    icon: '🔍',
    placeholder: '使用 Bing 搜索...'
  },
  {
    name: 'google',
    displayName: 'Google',
    baseUrl: 'https://www.google.com/search',
    queryParam: 'q',
    icon: '🌐',
    placeholder: '使用 Google 搜索...'
  },
  {
    name: 'baidu',
    displayName: '百度',
    baseUrl: 'https://www.baidu.com/s',
    queryParam: 'wd',
    icon: '🐻',
    placeholder: '使用百度搜索...'
  },
  {
    name: 'duckduckgo',
    displayName: 'DuckDuckGo',
    baseUrl: 'https://duckduckgo.com/',
    queryParam: 'q',
    icon: '🦆',
    placeholder: '使用 DuckDuckGo 搜索...'
  },
  {
    name: 'github',
    displayName: 'GitHub',
    baseUrl: 'https://github.com/search',
    queryParam: 'q',
    icon: '🐙',
    placeholder: '在 GitHub 中搜索...'
  }
];

// 默认搜索引擎
export const defaultSearchEngine = 'bing';

// 获取搜索引擎配置
export function getSearchEngine(name: string): SearchEngine | undefined {
  return searchEngines.find(engine => engine.name === name);
}

// 搜索配置
export interface SearchConfig {
  defaultEngine: string;
  enabledEngines: string[];
  showEngineSelector: boolean;
  maxSuggestions: number;
}

export const searchConfig: SearchConfig = {
  defaultEngine: defaultSearchEngine,
  enabledEngines: ['bing', 'google', 'baidu', 'github'], // 可以根据需要启用/禁用搜索引擎
  showEngineSelector: true,
  maxSuggestions: 5
};
