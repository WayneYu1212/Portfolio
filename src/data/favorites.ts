export type FavoriteItem = {
  title: string;
  meta: string;
  note: string;
};

export const musicFavorites: FavoriteItem[] = [
  {
    title: 'Supper Moment',
    meta: 'Cantonese rock',
    note: '适合放在长路、夜车和“还想再试一次”的时刻。',
  },
  {
    title: 'Pandora',
    meta: 'Band sound',
    note: '明亮、直接，有一种把情绪推到台前的力量。',
  },
  {
    title: 'KOLOR',
    meta: 'Hong Kong band',
    note: '粗粝一点，像很多故事里没被修饰的那部分。',
  },
  {
    title: 'Dear Jane',
    meta: 'Cantopop band',
    note: '旋律里有很强的城市感和关系感。',
  },
  {
    title: 'Mr.',
    meta: 'Cantonese pop rock',
    note: '适合做一个小型播放器里的常驻频道。',
  },
];

export const currentShelf: FavoriteItem[] = [
  {
    title: '正在做',
    meta: 'Personal site',
    note: '把简历、作品、音乐和小小的交互感放进一个空间。',
  },
  {
    title: '正在玩',
    meta: 'Game worlds',
    note: '继续观察玩家语言、任务节奏和叙事选择怎样影响体验。',
  },
  {
    title: '正在想',
    meta: 'AI workflow',
    note: 'AI 不只是效率工具，也是一面帮助整理想法的镜子。',
  },
];
