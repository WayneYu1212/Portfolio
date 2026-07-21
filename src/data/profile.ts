import { socials } from './socials';

export const profile = {
  name: '余宇颖',
  englishName: 'YU YUYING',
  email: 'uuwayne@qq.com',
  location: 'Guangzhou, China',
  intro:
    '每个社会都在用不同的语法讲述同一种人类的故事。',
  englishIntro:
    'Every society tells the human story through a different grammar.',
  quote: {
    attribution: 'Claude Lévi-Strauss',
    source:
      'A homepage motto inspired by structural anthropology and The Savage Mind. A closer published line reads: “the truth about man resides in the system of their differences and common properties.”',
    wikiHref: 'https://en.wikipedia.org/wiki/Claude_L%C3%A9vi-Strauss',
    sourceHref:
      'https://www.marxists.org/reference/subject/philosophy/works/fr/levistrauss.htm',
  },
  introOptions: [
    '每个社会都在用不同的语法讲述同一种人类的故事。',
    '在历史、游戏、互联网和 AI 之间做一些具体的东西。',
    '把真实的人、社群与材料整理成能被理解的内容。',
    'Every society tells the human story through a different grammar.',
  ],
  resumeHref: './downloads/yu-yuying-resume.pdf',
  socials,
  stats: [
    { value: '14', label: '深度访谈对象' },
    { value: '1500+', label: '分钟采访录音' },
    { value: '28万', label: '字访谈实录' },
    { value: '17万+', label: '单条视频播放' },
  ],
  advantages: [
    {
      title: '会把资料变成判断',
      text: '面对访谈、档案、论文和评论区，我习惯先搭结构，再决定哪些信息值得被看见。',
    },
    {
      title: '懂内容，也懂社群语境',
      text: '做小红书游戏内容时，我不只剪视频，也复盘玩家语言、热点节奏和评论区传播。',
    },
    {
      title: '能和 AI 一起做严肃工作',
      text: '在南京大学历史学术竞赛论文中，我用大模型辅助检索和分类，再回到原始史料做人工校验。',
    },
    {
      title: '有跨媒介表达意识',
      text: '同一份材料可以被写成论文、做成路线、剪成视频，也可以转成互动叙事原型。',
    },
  ],
};
