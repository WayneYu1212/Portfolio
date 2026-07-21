export type Project = {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  year: string;
  role: string;
  tags: string[];
  summary: string;
  question: string;
  process: string[];
  insight: string;
  output: string;
  result: string;
  reflection: string;
  status?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: 'oral-history',
    number: '01',
    title: '柯子岭客家村口述史',
    englishTitle: 'Oral History Archive',
    year: '2025',
    role: '采访执行 / 文献统筹 / 写作成员',
    tags: ['FIELD NOTES', 'ORAL HISTORY', 'RESEARCH'],
    summary:
      '从 14 位受访者、1500+ 分钟录音与 28 万字实录中，整理一个村落在城市化中的记忆、迁移与连接。',
    question: '当材料巨大、人物真实、立场复杂时，怎样提炼出可信又能被阅读的故事？',
    process: [
      '设计并执行结构化与非结构化访谈，围绕家族迁移、社区关系和文化传承追问细节。',
      '使用飞书、Notion 协作整理 300+ 份文献、录音与访谈记录，建立可追溯资料库。',
      '参与 12 万字成果写作，个人执笔约 4 万字，反复校对人物叙述与史料关系。',
    ],
    insight:
      '最重要的线索是“离而不散”：人离开村落，关系、记忆和身份仍以新的方式继续。',
    output: '28 万字访谈实录、12 万字项目成果、口述史案例写作。',
    result: '获全国大学生口述史成果交流赛三等奖。',
    reflection:
      '这让我意识到，研究的力度来自准确：把复杂的人和材料放回它们真实的位置。',
  },
  {
    id: 'chronicle',
    number: '02',
    title: 'Chronicle / 佣书',
    englishTitle: 'AI Narrative Prototype',
    year: '2026',
    role: '概念发起 / 互动叙事 / AI 辅助创作',
    tags: ['AI EXPERIMENTS', 'GAME WORLDS', 'PROTOTYPE'],
    summary:
      '一个把历史资料、AI 工作流与互动叙事结合起来的游戏原型。此处只展示案例，不混入 Chronicle 独立仓库源码。',
    question: '历史材料怎样通过玩家的选择、观察和行动重新进入当下？',
    process: [
      '梳理历史语境与人物动机，把资料转化为可交互的任务、文本和界面状态。',
      '使用 AI 辅助进行资料归纳、文案变体和叙事结构推演，再由人工判断语气与逻辑。',
      '围绕可读性、节奏和玩家理解成本迭代原型体验。',
    ],
    insight:
      'AI 把更多材料摊开，真正需要人做选择的地方也随之变得更清楚。',
    output: '互动叙事原型、内容结构、界面与玩法说明。',
    result: 'TODO: 补充 Chronicle 可公开链接、截图或演示视频。',
    reflection:
      '这是我把历史训练、游戏兴趣和 AI 工具放在同一个工作台上的一次实验。',
    status: 'Case only',
  },
  {
    id: 'xiaohongshu-game',
    number: '03',
    title: '小红书游戏内容创作',
    englishTitle: 'Game Content Creation',
    year: '2024',
    role: '选题 / 文案 / 剪辑 / 发布',
    tags: ['INTERNET CULTURE', 'GAME COMMUNITY', 'VIDEO'],
    summary:
      '独立完成游戏内容的选题、文案、剪辑与发布，单条视频获得 2 万赞、17 万+ 播放。',
    question: '怎样用玩家听得懂的语言，把热点、情绪和节奏变成可传播的视频？',
    process: [
      '捕捉社区热点和玩家共鸣点，优先选择能被评论区二创和接话的表达角度。',
      '用 BGM、逐帧踩点和转场压缩信息密度，让非核心玩家也能理解笑点。',
      '复盘发布后的点赞、收藏和评论，整理可复用的选题与表达规律。',
    ],
    insight:
      '好的传播常常来自一句“目标社群本来就想接住的话”。',
    output: '小红书图文、短视频、剪辑脚本与内容复盘。',
    result: '单条视频 2 万赞、17 万+ 播放。',
    reflection:
      '这个项目训练了我对平台语境、用户情绪和内容节奏的敏感度。',
    link: 'http://xhslink.com/o/4rTV0gibBoZ',
  },
  {
    id: 'museum-research',
    number: '04',
    title: '南越王博物院观众文创消费研究',
    englishTitle: 'Museum Visitor Research',
    year: '2025',
    role: '行为观察 / 访谈 / 需求分析',
    tags: ['USER RESEARCH', 'MUSEUM', 'INSIGHT'],
    summary:
      '追踪 30+ 位观众行为轨迹，访谈 22 位观众，提炼用户动机并输出文创产品优化建议。',
    question: '博物馆文创消费背后，观众到底在购买纪念、身份、审美，还是一次被理解的体验？',
    process: [
      '根据展厅与商店平面图记录观众动线、停留节点和关键行为。',
      '围绕购买动机、审美偏好和价格接受度访谈 22 位观众。',
      '把观察和访谈交叉验证，提炼三类用户动机与产品建议。',
    ],
    insight:
      '观众购买的常常是一种可携带的记忆：它能被带走、分享，也能证明“我来过”。',
    output: '用户画像、行为观察记录、6000 字需求分析与优化建议。',
    result: '形成面向文创产品和场景运营的改进方向。',
    reflection:
      '我开始更清楚地看到，研究最后要落到真实使用情境里的判断。',
  },
  {
    id: 'ai-history',
    number: '05',
    title: '南京大学历史学术竞赛论文',
    englishTitle: 'NJU History Forum Paper',
    year: '2026',
    role: '独立选题 / AI 辅助检索 / 史料细读 / 论文写作',
    tags: ['AI WORKFLOW', 'HISTORY OF EMOTIONS', 'LINGNAN'],
    summary:
      '以《广东新语》为中心，研究明末清初天灾人祸下岭南先民的情感共同体；用 AI 辅助史料扫描和词汇分类，再用人工细读完成判断。',
    question: '在兵燹、迁海、天灾与遗民书写交织的岭南，恐惧、悲愤和愤怒如何形成不同社会群体的情感共同体？',
    process: [
      '用大语言模型对《广东新语》康熙木天阁版和《清代档案史料丛编》相关材料做初步扫描，提取天灾、人祸和情感词汇线索。',
      '引入 Barbara H. Rosenwein 的“情感共同体”理论，把士大夫遗民、军阀和底层民众放进同一情感场域比较。',
      '回到《广东新语》、清代档案、遗民诗文和外文记录做交叉验证，筛掉 AI 归类中不稳的判断。',
    ],
    insight:
      'AI 适合处理“先把材料摊开”的阶段；真正的论文质量仍取决于问题意识、史料互证和对具体语境的细读。',
    output: '2.7 万字历史学术竞赛论文、情感词汇分类、史料互证框架。',
    result: '完成《明末清初天灾人祸下岭南先民情感共同体研究——以〈广东新语〉为中心》。全文不公开，仅展示研究方法和摘要级信息。',
    reflection:
      '这段经历让我更清楚地知道：AI 可以加快进入材料的速度，但不能替代历史研究里的怀疑、校验和同情之理解。',
  },
  {
    id: 'culture-walk',
    number: '06',
    title: '长湴村红色文旅漫步道',
    englishTitle: 'Culture Walk Planning',
    year: '2025',
    role: '项目统筹 / 实地调研 / 路线策划',
    tags: ['CULTURE', 'FIELDWORK', 'EXPERIENCE DESIGN'],
    summary:
      '基于红色文化资源调研，设计约 2 公里的文旅路线，并提出 AR 场景复原、集章机制和文创方案。',
    question: '地方文化怎样从资料和纪念点，转化为一次可以被走完、记住并分享的体验？',
    process: [
      '实地走访 5 个关键点位，拍摄、记录并访谈当地相关人员。',
      '梳理红色文化资源和空间关系，把故事节点转化为可行走路线。',
      '设计 AR 历史场景复原、集章玩法和文创产品方向。',
    ],
    insight:
      '文旅体验需要一条能让人停下、理解并参与的路径。',
    output: '路线方案、点位叙事、互动机制与文创概念。',
    result: '形成约 2 公里的主题漫步道方案。',
    reflection:
      '它补充了我从文本研究走向空间体验设计的能力。',
  },
];
