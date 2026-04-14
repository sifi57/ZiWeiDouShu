export type Dimension = 'yangYin' | 'rationalEmotional' | 'stableChange' | 'fameSubstance';

export interface Option {
  text: string;
  scores: Record<Dimension, number>;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

// Helper to create scores easily
const s = (yangYin: number, rationalEmotional: number, stableChange: number, fameSubstance: number) => ({
  yangYin, rationalEmotional, stableChange, fameSubstance
});

export const questions: Question[] = [
  {
    id: 1,
    text: "当你在午夜的图书馆看到一扇从未出现的门，你会？",
    options: [
      { text: "毫不犹豫地推开，迎接未知的命运。", scores: s(3, -1, -3, 2) },
      { text: "站在门外观察，试图寻找关于它的线索。", scores: s(-2, 3, 2, -1) },
      { text: "感受门后传来的气息，凭直觉决定去留。", scores: s(-1, -3, -1, 1) },
      { text: "转身离开，不属于现实的事物不值得涉足。", scores: s(1, 2, 3, -3) }
    ]
  },
  {
    id: 2,
    text: "面对一场注定会失败，但能留下绚烂火花的战役，你的选择是？",
    options: [
      { text: "披甲上阵，哪怕粉身碎骨也要留下传说。", scores: s(3, -2, -3, 3) },
      { text: "拒绝参与，保存实力以图东山再起。", scores: s(-1, 3, 2, -3) },
      { text: "在幕后运筹帷幄，试图改变既定的结局。", scores: s(-2, 2, -1, 1) },
      { text: "为赴死者高歌，记录下这悲壮的一幕。", scores: s(-1, -3, 1, 2) }
    ]
  },
  {
    id: 3,
    text: "在一片荒芜的废墟中，你找到了一颗种子，你会把它种在哪里？",
    options: [
      { text: "最高耸的山巅，让它迎着风暴生长。", scores: s(2, -1, -2, 3) },
      { text: "隐秘的山谷，小心翼翼地呵护它发芽。", scores: s(-2, 1, 2, -2) },
      { text: "繁华的市集旁，让所有人见证它的绽放。", scores: s(3, 1, -1, 2) },
      { text: "随手抛向风中，将它的命运交给天地。", scores: s(1, -3, -3, -1) }
    ]
  },
  {
    id: 4,
    text: "如果可以拥有一种超能力，你希望是？",
    options: [
      { text: "看透世间万物运转的绝对真理。", scores: s(-1, 3, 1, 2) },
      { text: "感知并抚慰所有生灵的悲欢离合。", scores: s(-2, -3, 1, -1) },
      { text: "打破一切既定规则的破坏之力。", scores: s(3, -1, -3, 1) },
      { text: "点石成金，构筑坚不可摧的物质帝国。", scores: s(2, 2, 2, -3) }
    ]
  },
  {
    id: 5,
    text: "暴雨倾盆的夜晚，有人敲响了你的门，你认为门外是谁？",
    options: [
      { text: "一个带来危险却诱人契机的陌生人。", scores: s(2, -1, -3, 1) },
      { text: "一位久别重逢，满身伤痕的故友。", scores: s(-1, -3, 1, 1) },
      { text: "只是风雨的恶作剧，门外空无一人。", scores: s(-2, 3, 2, -1) },
      { text: "迷路的旅人，正等待我的救赎。", scores: s(1, -2, 1, 2) }
    ]
  },
  {
    id: 6,
    text: "在漫长的旅途中，最让你感到恐惧的是？",
    options: [
      { text: "失去方向，在迷雾中原地踏步。", scores: s(2, 1, -2, 1) },
      { text: "同伴的背叛与人心的莫测。", scores: s(-1, -3, 1, -1) },
      { text: "发现终点根本不存在，一切皆是虚无。", scores: s(-2, 2, 1, 3) },
      { text: "盘缠耗尽，寸步难行的窘迫。", scores: s(1, 2, 2, -3) }
    ]
  },
  {
    id: 7,
    text: "如果你是一件古老的兵器，你希望自己是？",
    options: [
      { text: "悬于高堂，象征无上权力的华丽宝剑。", scores: s(2, 1, 2, 3) },
      { text: "藏于袖中，一击必杀的淬毒暗器。", scores: s(-3, 2, -2, -1) },
      { text: "饱经风霜，守护城池的厚重巨盾。", scores: s(1, 1, 3, -2) },
      { text: "随风飘摇，看似柔弱却能割喉的丝线。", scores: s(-2, -2, -1, 1) }
    ]
  },
  {
    id: 8,
    text: "面对一面能映照出前世的镜子，你最不想看到的是什么？",
    options: [
      { text: "自己曾是一个碌碌无为的平庸之辈。", scores: s(2, 1, -1, 3) },
      { text: "自己曾为了利益背叛了最爱的人。", scores: s(-1, -3, 1, -1) },
      { text: "自己曾是一个被规则死死束缚的囚徒。", scores: s(1, -1, -3, 1) },
      { text: "自己曾拥有天下，却最终一无所有。", scores: s(-2, 2, 2, 2) }
    ]
  },
  {
    id: 9,
    text: "在梦境的深处，你听到了一首古老的歌谣，它的旋律是？",
    options: [
      { text: "激昂澎湃，如同千军万马奔腾。", scores: s(3, -1, -2, 1) },
      { text: "空灵缥缈，仿佛来自九天之上。", scores: s(-2, 1, 1, 2) },
      { text: "哀婉缠绵，诉说着无尽的思念。", scores: s(-1, -3, 1, -1) },
      { text: "沉稳厚重，如同大地的心跳。", scores: s(1, 2, 3, -2) }
    ]
  },
  {
    id: 10,
    text: "如果世界将在明天毁灭，你今晚会做什么？",
    options: [
      { text: "召集所有人，狂欢至最后一刻。", scores: s(3, -2, -2, 1) },
      { text: "静静地整理自己的物品，体面地迎接终局。", scores: s(-1, 3, 2, -1) },
      { text: "陪伴在最爱的人身边，相拥而眠。", scores: s(-2, -3, 1, -2) },
      { text: "独自登上高处，冷眼旁观这最后的疯狂。", scores: s(1, 2, -1, 3) }
    ]
  },
  {
    id: 11,
    text: "你在一本无字天书中看到了一幅画面，那是？",
    options: [
      { text: "星辰陨落，天地重开的壮阔景象。", scores: s(2, -1, -3, 2) },
      { text: "繁杂的齿轮与机关，精密咬合运转。", scores: s(-2, 3, 1, -1) },
      { text: "一朵在冰雪中傲然绽放的红梅。", scores: s(1, -2, 2, 1) },
      { text: "堆积如山的金银财宝，闪烁着诱人的光芒。", scores: s(1, 2, 1, -3) }
    ]
  },
  {
    id: 12,
    text: "当你身处绝境，唯一能救你的方法是牺牲一个无辜者，你会？",
    options: [
      { text: "果断动手，生存是第一法则。", scores: s(2, 3, -1, -2) },
      { text: "宁可自己毁灭，也不愿背负罪孽。", scores: s(-2, -3, 2, 2) },
      { text: "试图寻找第三条路，哪怕希望渺茫。", scores: s(1, 1, -2, 1) },
      { text: "闭上眼睛，让命运来替我做决定。", scores: s(-1, -2, 1, -1) }
    ]
  },
  {
    id: 13,
    text: "你认为世界上最强大的力量是什么？",
    options: [
      { text: "绝对的权力与秩序，让万物臣服。", scores: s(3, 2, 2, 2) },
      { text: "洞悉一切的智慧与无懈可击的逻辑。", scores: s(-2, 3, 1, 1) },
      { text: "能够融化冰雪的爱与共情。", scores: s(-1, -3, 1, -1) },
      { text: "打破一切枷锁的自由与反叛。", scores: s(2, -1, -3, 1) }
    ]
  },
  {
    id: 14,
    text: "在一个完美的乌托邦社会中，你最可能扮演的角色是？",
    options: [
      { text: "制定规则的领袖，维持着表面的和平。", scores: s(2, 2, 3, 2) },
      { text: "敏锐的观察者，暗中记录着社会的裂痕。", scores: s(-2, 3, -1, 1) },
      { text: "传递温暖的治愈者，抚慰人们的心灵。", scores: s(-1, -3, 2, -1) },
      { text: "试图唤醒众人，打破虚假繁荣的叛逆者。", scores: s(3, -1, -3, 1) }
    ]
  },
  {
    id: 15,
    text: "当你凝视深渊时，你觉得深渊在对你说什么？",
    options: [
      { text: "“跳下来吧，这里有你渴望的自由。”", scores: s(2, -2, -3, 1) },
      { text: "“你和我一样，本质上都是虚无。”", scores: s(-2, 2, 1, 3) },
      { text: "“不要害怕，我会接住你。”", scores: s(-1, -3, 1, -1) },
      { text: "“你若敢来，我便将你吞噬。”", scores: s(1, 1, 2, -2) }
    ]
  },
  {
    id: 16,
    text: "如果你的生命只剩下一天，你最想留下的是什么？",
    options: [
      { text: "一部惊世骇俗的著作，让思想永存。", scores: s(-1, 2, -1, 3) },
      { text: "一座坚不可摧的堡垒，庇护我的后代。", scores: s(1, 1, 3, -3) },
      { text: "一段刻骨铭心的爱情故事，流传千古。", scores: s(-2, -3, 1, 2) },
      { text: "一场轰轰烈烈的变革，彻底改变世界。", scores: s(3, -1, -3, 1) }
    ]
  },
  {
    id: 17,
    text: "在迷宫的中心，你找到了一个宝箱，打开后里面是？",
    options: [
      { text: "一面能看透人心的镜子。", scores: s(-2, 3, 1, 1) },
      { text: "一把能斩断一切烦恼的利剑。", scores: s(2, -1, -2, 1) },
      { text: "一瓶能治愈所有创伤的灵药。", scores: s(-1, -3, 2, -1) },
      { text: "一块能换取无尽财富的宝石。", scores: s(1, 2, 1, -3) }
    ]
  },
  {
    id: 18,
    text: "你认为人与人之间最理想的关系是？",
    options: [
      { text: "势均力敌，互相成就的盟友。", scores: s(2, 2, 1, 1) },
      { text: "灵魂契合，无需多言的知己。", scores: s(-2, -3, 1, 2) },
      { text: "各取所需，互不干涉的合作者。", scores: s(1, 3, 2, -2) },
      { text: "充满激情，不断碰撞出火花的恋人。", scores: s(1, -2, -3, 1) }
    ]
  },
  {
    id: 19,
    text: "当你面对一个无法解开的死结，你会？",
    options: [
      { text: "用尽一切办法，哪怕耗尽一生也要解开。", scores: s(1, 2, 3, 1) },
      { text: "直接用剑斩断，不被过去所困。", scores: s(3, -1, -3, 1) },
      { text: "仔细研究它的纹理，试图找到规律。", scores: s(-2, 3, 1, -1) },
      { text: "将它作为一个艺术品，欣赏它的复杂。", scores: s(-1, -2, 1, 2) }
    ]
  },
  {
    id: 20,
    text: "在故事的最后，你希望自己的结局是？",
    options: [
      { text: "登上权力的巅峰，孤独地俯瞰众生。", scores: s(2, 2, 2, 3) },
      { text: "隐居山林，与清风明月为伴。", scores: s(-3, 1, 2, 1) },
      { text: "在最辉煌的时刻死去，成为永恒的传说。", scores: s(3, -2, -2, 3) },
      { text: "拥有平凡但温暖的家庭，安度晚年。", scores: s(-1, -3, 3, -2) }
    ]
  }
];
