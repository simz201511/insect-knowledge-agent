/**
 * 瓢虫课堂 - 教育内容模块
 * 内容来源：瓢虫教授（Professor Ladybug）昆虫科普知识库
 * 五大主题：昆虫基础 / 变态发育 / 分类速查 / 蝴蝶vs飞蛾 / 观察指南
 */

const CLASSROOM = {

  /* ============ 主题一：什么是昆虫 ============ */
  basics: {
    title: "🐛 什么是昆虫？",
    subtitle: "昆虫属于节肢动物门 · 昆虫纲（Insecta），判断一种小动物是不是昆虫，看这四个特征",
    checklist: [
      { emoji: "1️⃣", title: "身体分三部分", desc: "头、胸、腹三段分明，各司其职" },
      { emoji: "2️⃣", title: "胸部有 3 对足", desc: "共 6 条腿，「六足虫」由此得名" },
      { emoji: "3️⃣", title: "通常有 2 对翅", desc: "部分类群翅退化或消失，如工蚁、跳蚤" },
      { emoji: "4️⃣", title: "体表有外骨骼", desc: "身体由一节节体节构成，像穿了一副盔甲" }
    ],
    mythBuster: {
      title: "⚠️ 常见误区",
      desc: "蜘蛛、蜈蚣、蝎子、马陆都不是昆虫！",
      detail: [
        "🕷️ 蜘蛛、蝎子 → 蛛形纲（8 条腿）",
        "🐛 蜈蚣、马陆 → 多足纲（腿太多数不清）",
        "✅ 记住口诀：六条腿 + 三段身 + 大多数有翅膀，才是昆虫"
      ]
    },
    funData: {
      title: "📊 有趣的数字",
      items: [
        { num: "约 100 万种", label: "地球上已描述的昆虫种类" },
        { num: "约 8 成", label: "昆虫占已知动物种类的比例" },
        { num: "35 万+", label: "鞘翅目（甲虫）种类，昆虫界第一大目" }
      ]
    }
  },

  /* ============ 主题二：变态发育 ============ */
  metamorphosis: {
    title: "🔄 变态发育：昆虫的成长魔法",
    subtitle: "昆虫一生要经历形态上的大变化，分为完全变态和不完全变态两种方式",
    types: [
      {
        emoji: "🦋",
        name: "完全变态",
        latin: "Holometabolous",
        process: ["卵 🥚", "幼虫 🐛", "蛹 🫘", "成虫 🦋"],
        desc: "幼虫与成虫形态差异巨大，中间要经历「蛹」这个重组阶段，就像进了一次「变身舱」",
        representatives: "蝴蝶、飞蛾、甲虫、蜜蜂、蚂蚁、苍蝇、蚊子"
      },
      {
        emoji: "🦗",
        name: "不完全变态",
        latin: "Hemimetabolous",
        process: ["卵 🥚", "若虫 🦗", "成虫 🦗"],
        desc: "若虫形态与成虫相似，只是没有发育完全的翅膀，每次蜕皮长大一点，像「小时候的你」",
        representatives: "蝗虫、蟋蟀、螳螂、蝉、蜻蜓、蚜虫"
      }
    ],
    quiz: {
      title: "🧠 小测验",
      question: "蜻蜓有蛹的阶段吗？",
      options: ["有，蜻蜓要化蛹", "没有，蜻蜓是不完全变态"],
      answer: 1,
      explain: "蜻蜓是不完全变态：幼虫（叫「水虿」）生活在水里，羽化后直接变成会飞的成虫，没有蛹的阶段。"
    }
  },

  /* ============ 主题三：分类速查表 ============ */
  taxonomy: {
    title: "📋 昆虫主要目速查表",
    subtitle: "已知的昆虫分为 30 多个目，这 12 个目覆盖了你日常能见到的大多数昆虫",
    orders: [
      { order: "鞘翅目", latin: "Coleoptera", reps: "瓢虫、天牛、金龟子、萤火虫、锹甲", feature: "前翅硬化成鞘翅；种类最多的目（约占昆虫四成）", emoji: "🪲" },
      { order: "鳞翅目", latin: "Lepidoptera", reps: "蝴蝶、飞蛾", feature: "翅和身体覆盖鳞片（摸到会掉「粉」）", emoji: "🦋" },
      { order: "膜翅目", latin: "Hymenoptera", reps: "蜜蜂、蚂蚁、黄蜂、胡蜂", feature: "两对膜质翅；蜂和蚁多为社会性昆虫", emoji: "🐝" },
      { order: "双翅目", latin: "Diptera", reps: "苍蝇、蚊子、果蝇", feature: "只有一对前翅，后翅退化为「平衡棒」", emoji: "🦟" },
      { order: "直翅目", latin: "Orthoptera", reps: "蝗虫、蟋蟀、螽斯、蝼蛄", feature: "后足发达善跳跃；雄虫多会鸣叫", emoji: "🦗" },
      { order: "半翅目", latin: "Hemiptera", reps: "蝉、蚜虫、蝽（臭虫）", feature: "刺吸式口器，像针一样刺入吸汁", emoji: "🐞" },
      { order: "蜻蜓目", latin: "Odonata", reps: "蜻蜓、豆娘", feature: "捕食性；复眼极大，飞行能力强", emoji: "🪰" },
      { order: "螳螂目", latin: "Mantodea", reps: "螳螂", feature: "前足特化为捕捉足（「大刀」）", emoji: "🥷" },
      { order: "竹节虫目", latin: "Phasmatodea", reps: "竹节虫、叶䗛", feature: "身体细长像枝条/叶片，拟态极强", emoji: "🌿" },
      { order: "蜚蠊目", latin: "Blattodea", reps: "蟑螂、白蚁", feature: "身体扁平；白蚁现已归入本目", emoji: "🪳" },
      { order: "脉翅目", latin: "Neuroptera", reps: "草蛉、蚁狮", feature: "两对膜质翅，翅脉呈网状", emoji: "🕸️" },
      { order: "缨翅目", latin: "Thysanoptera", reps: "蓟马", feature: "体型极小，翅缘有缨状长毛", emoji: "🔬" }
    ],
    tip: "💡 鉴别口诀：先数腿（6 条才是昆虫），再看翅（鞘翅/鳞翅/膜翅/双翅），最后看口器和触角，基本就能定位到目啦。"
  },

  /* ============ 主题四：蝴蝶 vs 飞蛾 ============ */
  butterflyVsMoth: {
    title: "🦋 蝴蝶 vs 飞蛾：五大区别",
    subtitle: "同属鳞翅目，长得像双胞胎，其实有 5 个关键区别",
    features: [
      { feature: "触角", butterfly: "棒状/锤状（末端膨大）", moth: "丝状、羽状或栉状（多样）", emoji: "👂" },
      { feature: "停歇姿态", butterfly: "翅膀多竖合于背上", moth: "翅膀多平展或呈屋脊状", emoji: "🛬" },
      { feature: "活动时间", butterfly: "多数白天活动", moth: "多数夜间活动", emoji: "🌗" },
      { feature: "身体", butterfly: "较纤细", moth: "多较粗壮、多毛", emoji: "💪" },
      { feature: "化蛹", butterfly: "多为裸露的缢蛹/悬蛹", moth: "多吐丝结茧再化蛹", emoji: "🫘" }
    ],
    caution: "⚠️ 注意：以上是「多数情况」，存在例外——有些天蚕蛾极其艳丽，也有白天活动的飞蛾。鉴别时请综合多个特征判断，不要只看一点。"
  },

  /* ============ 主题五：观察指南 ============ */
  observation: {
    title: "🔭 自然观察指南",
    subtitle: "瓢虫教授的观察小技巧，带你安全又有趣地探索六足世界",
    cards: [
      {
        emoji: "📝",
        title: "观察记录法",
        items: [
          "记录「时间 + 地点 + 天气」三个基本要素",
          "拍照或素描：整体 + 局部（触角、翅膀、足）",
          "记下行为：在吃什么？怎么移动？和同伴如何互动？"
        ]
      },
      {
        emoji: "🔍",
        title: "找虫好去处",
        items: [
          "花朵上：蝴蝶、蜜蜂、食蚜蝇最爱访花",
          "草丛和叶背面：蝗虫、螳螂、蚜虫藏身处",
          "灯光下：夏夜的路灯是飞蛾、甲虫的聚会地",
          "水边：蜻蜓、豆娘的领地"
        ]
      },
      {
        emoji: "🛡️",
        title: "安全守则",
        items: [
          "只观察，不徒手捕捉胡蜂、蜜蜂等刺人昆虫",
          "有毒昆虫（如刺蛾幼虫「洋辣子」）保持安全距离",
          "观察后洗手；野外穿长袖长裤防蚊虫叮咬",
          "不破坏昆虫的栖息环境，观察结束恢复原样"
        ]
      },
      {
        emoji: "📓",
        title: "冷知识角",
        items: [
          "瓢虫会「假死」：受惊时装死并分泌黄色防御液",
          "蟋蟀的「耳朵」长在前足胫节上",
          "蜣螂（屎壳郎）滚粪球是为了产卵，是自然界的清道夫",
          "萤火虫的光是「冷光」，不同种类闪光频率不同"
        ]
      }
    ]
  },

  /* ============ 渲染逻辑 ============ */

  currentTopic: 'basics',

  init() {
    document.querySelectorAll('.classroom-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.classroom-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentTopic = chip.dataset.topic;
        this.render();
      });
    });
    this.render();
  },

  render() {
    const el = document.getElementById('classroomContent');
    if (!el) return;
    const t = this.currentTopic;
    if (t === 'basics') el.innerHTML = this.renderBasics();
    else if (t === 'metamorphosis') el.innerHTML = this.renderMetamorphosis();
    else if (t === 'taxonomy') el.innerHTML = this.renderTaxonomy();
    else if (t === 'butterfly-vs-moth') el.innerHTML = this.renderButterflyVsMoth();
    else if (t === 'observation') el.innerHTML = this.renderObservation();
  },

  renderBasics() {
    const d = this.basics;
    return `
      <div class="lesson-header"><h3>${d.title}</h3><p>${d.subtitle}</p></div>
      <div class="feature-grid">
        ${d.checklist.map(c => `
          <div class="feature-card">
            <div class="feature-emoji">${c.emoji}</div>
            <h4>${c.title}</h4>
            <p>${c.desc}</p>
          </div>`).join('')}
      </div>
      <div class="callout callout-warn">
        <h4>${d.mythBuster.title}</h4>
        <p class="callout-main">${d.mythBuster.desc}</p>
        ${d.mythBuster.detail.map(x => `<p class="callout-line">${x}</p>`).join('')}
      </div>
      <div class="fun-data">
        <h4>${d.funData.title}</h4>
        <div class="fun-data-grid">
          ${d.funData.items.map(i => `
            <div class="fun-data-item">
              <div class="fun-num">${i.num}</div>
              <div class="fun-label">${i.label}</div>
            </div>`).join('')}
        </div>
      </div>`;
  },

  renderMetamorphosis() {
    const d = this.metamorphosis;
    return `
      <div class="lesson-header"><h3>${d.title}</h3><p>${d.subtitle}</p></div>
      <div class="meta-cards">
        ${d.types.map(t => `
          <div class="meta-card">
            <div class="meta-head"><span class="meta-emoji">${t.emoji}</span>
              <div><h4>${t.name}</h4><span class="latin">${t.latin}</span></div>
            </div>
            <div class="meta-process">
              ${t.process.map((p, i) => `<span class="meta-stage">${p}</span>${i < t.process.length - 1 ? '<span class="meta-arrow">→</span>' : ''}`).join('')}
            </div>
            <p class="meta-desc">${t.desc}</p>
            <p class="meta-reps"><strong>代表昆虫：</strong>${t.representatives}</p>
          </div>`).join('')}
      </div>
      <div class="quiz-box">
        <h4>${d.quiz.title}</h4>
        <p class="quiz-question">${d.quiz.question}</p>
        <div class="quiz-options">
          ${d.quiz.options.map((o, i) => `<button class="quiz-option" onclick="CLASSROOM.answerQuiz(this, ${i === d.quiz.answer})">${o}</button>`).join('')}
        </div>
        <p class="quiz-explain" id="quizExplain" style="display:none;">💡 ${d.quiz.explain}</p>
      </div>`;
  },

  answerQuiz(btn, correct) {
    document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
    btn.classList.add(correct ? 'correct' : 'wrong');
    document.getElementById('quizExplain').style.display = 'block';
  },

  renderTaxonomy() {
    const d = this.taxonomy;
    return `
      <div class="lesson-header"><h3>${d.title}</h3><p>${d.subtitle}</p></div>
      <div class="taxo-table-wrap">
        <table class="taxo-table">
          <thead><tr><th>目</th><th>拉丁名</th><th>代表昆虫</th><th>最显著特征</th></tr></thead>
          <tbody>
            ${d.orders.map(o => `
              <tr>
                <td class="taxo-order"><span class="taxo-emoji">${o.emoji}</span>${o.order}</td>
                <td class="latin">${o.latin}</td>
                <td>${o.reps}</td>
                <td>${o.feature}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="callout callout-tip">${d.tip}</div>`;
  },

  renderButterflyVsMoth() {
    const d = this.butterflyVsMoth;
    return `
      <div class="lesson-header"><h3>${d.title}</h3><p>${d.subtitle}</p></div>
      <div class="bvm-table-wrap">
        <table class="bvm-table">
          <thead><tr><th>特征</th><th>🦋 蝴蝶</th><th>🌙 飞蛾</th></tr></thead>
          <tbody>
            ${d.features.map(f => `
              <tr>
                <td class="bvm-feature">${f.emoji} ${f.feature}</td>
                <td class="bvm-butterfly">${f.butterfly}</td>
                <td class="bvm-moth">${f.moth}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="callout callout-warn">${d.caution}</div>`;
  },

  renderObservation() {
    const d = this.observation;
    return `
      <div class="lesson-header"><h3>${d.title}</h3><p>${d.subtitle}</p></div>
      <div class="feature-grid">
        ${d.cards.map(c => `
          <div class="obs-card">
            <div class="obs-head"><span class="obs-emoji">${c.emoji}</span><h4>${c.title}</h4></div>
            <ul class="obs-list">
              ${c.items.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>`).join('')}
      </div>`;
  }
};

// 页面加载完成后初始化（在 app.js 的 App.init 之前定义，DOMContentLoaded 时启动）
document.addEventListener('DOMContentLoaded', () => CLASSROOM.init());
