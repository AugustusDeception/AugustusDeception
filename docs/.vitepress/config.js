export default {
  title: '算法源码空间',
  description: '硬核C++算法题解 | 数据结构深度解析 | 竞赛编程实战',
  appearance: 'dark',
  lastUpdated: false,
  
  head: [
    ['link', { rel: 'icon', href: '/code-icon.svg' }],
    ['meta', { name: 'theme-color', content: '#0ea5e9' }]
  ],

  themeConfig: {
    logo: '/code-icon.svg',
    
    // 主导航
    nav: [
      { text: '🏠 源码首页', link: '/' },
      { text: '📚 算法宝典', link: '/posts/基础算法/' },
      { text: '🛠️ 数据结构', link: '/posts/数据结构/' },
      { text: '⚡ 动态规划', link: '/posts/动态规划/' },
      { text: '🌐 图论世界', link: '/posts/图论算法/' },
      { text: '🔧 STL利器', link: '/posts/STL详解/' },
      { text: '📊 关于作者', link: '/about' }
    ],

    // 侧边栏详细分类
    sidebar: {
      '/posts/数据结构/': [
        {
          text: '🌳 树形结构',
          collapsed: false,
          items: [
            { text: '⚡ 线段树详解', link: '/posts/数据结构/线段树/' },
            { text: '📊 树状数组', link: '/posts/数据结构/树状数组/' },
            { text: '🎯 平衡树实战', link: '/posts/数据结构/平衡树/' },
            { text: '🌲 字典树应用', link: '/posts/数据结构/字典树/' }
          ]
        },
        {
          text: '🔗 集合操作',
          items: [
            { text: '🤝 并查集深度解析', link: '/posts/数据结构/并查集/' },
            { text: '🗃️ 哈希表原理', link: '/posts/数据结构/哈希表/' },
            { text: '📦 堆的实现', link: '/posts/数据结构/堆/' }
          ]
        }
      ],

      '/posts/动态规划/': [
        {
          text: '📈 基础DP',
          collapsed: false,
          items: [
            { text: '➰ 线性DP', link: '/posts/动态规划/线性DP/' },
            { text: '🎒 背包问题', link: '/posts/动态规划/背包问题/' },
            { text: '📏 区间DP', link: '/posts/动态规划/区间DP/' }
          ]
        },
        {
          text: '🎮 高级DP',
          items: [
            { text: '🌿 树形DP', link: '/posts/动态规划/树形DP/' },
            { text: '💾 状态压缩', link: '/posts/动态规划/状态压缩/' },
            { text: '🔢 数位DP', link: '/posts/动态规划/数位DP/' },
            { text: '🎲 概率DP', link: '/posts/动态规划/概率DP/' }
          ]
        }
      ],

      '/posts/图论算法/': [
        {
          text: '🛣️ 路径查找',
          collapsed: false,
          items: [
            { text: '🚀 最短路算法', link: '/posts/图论算法/最短路/' },
            { text: '🌉 最小生成树', link: '/posts/图论算法/最小生成树/' }
          ]
        },
        {
          text: '🔍 图论进阶',
          items: [
            { text: '📋 拓扑排序', link: '/posts/图论算法/拓扑排序/' },
            { text: '💧 网络流', link: '/posts/图论算法/网络流/' },
            { text: '🎭 二分图匹配', link: '/posts/图论算法/二分图/' },
            { text: '🔄 强连通分量', link: '/posts/图论算法/强连通分量/' }
          ]
        }
      ],

      '/posts/STL详解/': [
        {
          text: '🗂️ 容器类',
          collapsed: false,
          items: [
            { text: '📋 vector深度解析', link: '/posts/STL详解/vector/' },
            { text: '🔄 set/map原理', link: '/posts/STL详解/set/' },
            { text: '⏩ queue/stack', link: '/posts/STL详解/queue/' }
          ]
        },
        {
          text: '⚙️ 算法工具',
          items: [
            { text: '🔧 algorithm库', link: '/posts/STL详解/algorithm/' },
            { text: '📝 string操作', link: '/posts/STL详解/string/' }
          ]
        }
      ],

      '/posts/基础算法/': [
        {
          text: '🎯 核心算法',
          items: [
            { text: '🔍 二分查找', link: '/posts/基础算法/二分/' },
            { text: '🌀 排序算法', link: '/posts/基础算法/排序/' },
            { text: '🎨 贪心策略', link: '/posts/基础算法/贪心/' }
          ]
        }
      ],

      '/posts/搜索算法/': [
        {
          text: '🔎 搜索技术',
          items: [
            { text: '🌿 DFS深度优先', link: '/posts/搜索算法/DFS/' },
            { text: '📏 BFS广度优先', link: '/posts/搜索算法/BFS/' },
            { text: '💡 回溯算法', link: '/posts/搜索算法/回溯/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AugustusDeception' },
      { 
        icon: { 
          svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18.75c-4.832 0-8.75-3.918-8.75-8.75S7.168 3.25 12 3.25s8.75 3.918 8.75 8.75-3.918 8.75-8.75 8.75zm-1.25-13.75h2.5v2.5h-2.5v-2.5zm0 3.75h2.5v7.5h-2.5v-7.5z"/></svg>` 
        }, 
        link: 'https://www.luogu.com.cn/user/1408853',
        ariaLabel: '洛谷主页'
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '🔍 搜索算法', buttonAriaLabel: '搜索算法' }
        }
      }
    }
  },

  markdown: {
    lineNumbers: true,
    config: (md) => {
      // markdown扩展配置
    }
  }
}