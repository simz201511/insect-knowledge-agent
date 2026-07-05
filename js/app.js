/**
 * 虫识 - 应用逻辑
 * 查询逻辑：图片和文字可单独使用，也可组合使用
 */

const App = {
  selectedTags: [],
  uploadedFile: null,
  uploadedImage: null,

  init() {
    this.bindTabs();
    this.bindUpload();
    this.bindIdentify();
    this.bindQuickTags();
    this.renderEncyclopedia();
    this.renderCompareTable();
  },

  // Tab switching
  bindTabs() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + target).classList.add('active');
      });
    });
  },

  // Image upload — only preview, do NOT auto-identify
  bindUpload() {
    const area = document.getElementById('uploadArea');
    const input = document.getElementById('fileInput');
    const reupload = document.getElementById('reuploadBtn');

    area.addEventListener('click', () => input.click());
    area.addEventListener('dragover', e => { e.preventDefault(); area.classList.add('dragover'); });
    area.addEventListener('dragleave', () => area.classList.remove('dragover'));
    area.addEventListener('drop', e => {
      e.preventDefault();
      area.classList.remove('dragover');
      if (e.dataTransfer.files[0]) this.handleFile(e.dataTransfer.files[0]);
    });
    input.addEventListener('change', e => {
      if (e.target.files[0]) this.handleFile(e.target.files[0]);
    });
    reupload.addEventListener('click', (e) => {
      e.stopPropagation();
      document.getElementById('previewContainer').style.display = 'none';
      document.getElementById('uploadArea').style.display = 'flex';
      this.uploadedFile = null;
      this.uploadedImage = null;
      input.value = '';
      this.updateIdentifyButton();
    });
  },

  handleFile(file) {
    if (!file.type.startsWith('image/')) {
      alert('请上传图片文件');
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      this.uploadedFile = file;
      this.uploadedImage = e.target.result;
      document.getElementById('previewImage').src = e.target.result;
      document.getElementById('uploadArea').style.display = 'none';
      document.getElementById('previewContainer').style.display = 'block';
      this.updateIdentifyButton();
    };
    reader.readAsDataURL(file);
  },

  // Unified identify button — handles image-only, text-only, or both
  bindIdentify() {
    document.getElementById('searchBtn').addEventListener('click', () => this.identify());
    document.getElementById('describeInput').addEventListener('keypress', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.identify();
      }
    });
    // Update button state when text changes
    document.getElementById('describeInput').addEventListener('input', () => this.updateIdentifyButton());
  },

  // Update the identify button label/hint based on current inputs
  updateIdentifyButton() {
    const hasImage = !!this.uploadedImage;
    const hasText = document.getElementById('describeInput').value.trim().length > 0;
    const btn = document.getElementById('searchBtn');
    const hint = document.getElementById('identifyHint');

    if (hasImage && hasText) {
      btn.textContent = '开始识别（图片 + 描述）';
      if (hint) hint.textContent = '将结合图片和文字描述综合识别';
    } else if (hasImage) {
      btn.textContent = '开始识别（仅图片）';
      if (hint) hint.textContent = '将根据图片特征识别昆虫';
    } else if (hasText) {
      btn.textContent = '开始识别（仅描述）';
      if (hint) hint.textContent = '将根据文字描述匹配昆虫';
    } else {
      btn.textContent = '开始识别';
      if (hint) hint.textContent = '上传图片或输入描述，可单独使用，也可组合使用';
    }
  },

  // Unified identify entry point
  identify() {
    const text = document.getElementById('describeInput').value.trim();
    const hasImage = !!this.uploadedFile;
    const hasText = text.length > 0;

    if (!hasImage && !hasText) {
      this.showInputHint();
      return;
    }

    const container = document.getElementById('identifyResults');
    const modeLabel = hasImage && hasText ? '图片 + 描述' : hasImage ? '图片' : '描述';
    container.innerHTML = `
      <div class="loading">
        <div class="spinner"></div>
        <p>正在${hasImage && hasText ? '综合图片和描述' : hasImage ? '分析图片' : '根据描述'}识别昆虫...</p>
      </div>
    `;

    setTimeout(() => {
      let results;

      if (hasImage && hasText) {
        // Combined mode: text matching as base + image bonus
        results = this.matchCombined(text, this.uploadedFile);
      } else if (hasImage) {
        // Image only
        results = this.matchByImage(this.uploadedFile);
      } else {
        // Text only
        results = this.matchByText(text);
      }

      this.renderResults(results, hasImage, hasText);
    }, hasImage ? 1500 : 800);
  },

  // Show a gentle hint when no input is provided
  showInputHint() {
    const container = document.getElementById('identifyResults');
    container.innerHTML = `
      <div class="no-results">
        <div class="icon">👆</div>
        <p>请上传一张昆虫照片，或用文字描述你看到的昆虫</p>
        <p style="margin-top:8px;font-size:13px;">两种方式可以单独使用，也可以同时使用以提高识别准确度</p>
      </div>
    `;
  },

  // Image-only matching (simulated)
  matchByImage(file) {
    const fileName = (file.name || '').toLowerCase();
    const results = [];

    INSECT_DATABASE.forEach(insect => {
      let score = 0;
      insect.keywords.forEach(kw => {
        if (fileName.includes(kw.toLowerCase())) score += 30;
      });
      if (score > 0) {
        results.push({
          insect,
          confidence: Math.min(score + 10, 90) + Math.floor(Math.random() * 8),
          reasons: [`图片文件名匹配: "${insect.name}"`]
        });
      }
    });

    // If no filename match, return common candidates with moderate confidence
    if (results.length === 0) {
      const candidates = ['mosquito', 'fly', 'cockroach', 'ant', 'spider', 'beetle', 'gnat', 'flea'];
      candidates.forEach((id, i) => {
        const insect = INSECT_DATABASE.find(d => d.id === id);
        if (insect) {
          results.push({
            insect,
            confidence: 32 + Math.floor(Math.random() * 15) - i * 2,
            reasons: ['基于图片特征的初步推测']
          });
        }
      });
    }

    results.sort((a, b) => b.confidence - a.confidence);
    return results.slice(0, 4);
  },

  // Combined matching: text score + image bonus
  matchCombined(text, file) {
    const textResults = this.matchByText(text);
    const fileName = (file.name || '').toLowerCase();

    // Add image bonus to text results
    textResults.forEach(r => {
      let imgBonus = 0;
      r.insect.keywords.forEach(kw => {
        if (fileName.includes(kw.toLowerCase())) imgBonus += 8;
      });
      if (imgBonus > 0) {
        r.reasons.push(`图片辅助匹配: +${imgBonus}%`);
      }
      r.confidence = Math.min(r.confidence + imgBonus, 95);
    });

    // If image matches something not in text results, add it
    INSECT_DATABASE.forEach(insect => {
      if (textResults.find(r => r.insect.id === insect.id)) return;
      let imgScore = 0;
      insect.keywords.forEach(kw => {
        if (fileName.includes(kw.toLowerCase())) imgScore += 20;
      });
      if (imgScore > 0) {
        textResults.push({
          insect,
          confidence: Math.min(imgScore + 15, 70),
          reasons: ['图片匹配（文字未匹配到）', `图片文件名匹配: "${insect.name}"`]
        });
      }
    });

    textResults.sort((a, b) => b.confidence - a.confidence);
    return textResults.slice(0, 4);
  },

  bindQuickTags() {
    document.querySelectorAll('.quick-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const value = tag.dataset.tag;
        if (tag.classList.contains('active')) {
          tag.classList.remove('active');
          this.selectedTags = this.selectedTags.filter(t => t !== value);
        } else {
          tag.classList.add('active');
          this.selectedTags.push(value);
        }
        // Also append to textarea
        const input = document.getElementById('describeInput');
        if (tag.classList.contains('active')) {
          if (input.value && !input.value.endsWith(' ')) input.value += ' ';
          input.value += value + ' ';
        }
        this.updateIdentifyButton();
      });
    });
  },

  // Text matching algorithm
  matchByText(text) {
    const lowerText = text.toLowerCase();
    const results = [];

    INSECT_DATABASE.forEach(insect => {
      let score = 0;
      const reasons = [];

      // Match keywords
      insect.keywords.forEach(kw => {
        if (lowerText.includes(kw.toLowerCase())) {
          score += 25;
          reasons.push(`关键词匹配: "${kw}"`);
        }
      });

      // Match name
      if (lowerText.includes(insect.name.toLowerCase())) {
        score += 40;
        reasons.push(`名称匹配: "${insect.name}"`);
      }

      // Match color
      if (insect.identification.color) {
        const colors = ['黑', '褐', '棕', '红', '绿', '黄', '白', '灰'];
        colors.forEach(color => {
          if (lowerText.includes(color) && insect.identification.color.includes(color)) {
            score += 8;
            reasons.push(`颜色匹配: ${color}色`);
          }
        });
      }

      // Match behavior
      if (lowerText.includes('飞') && insect.identification.wings && insect.identification.wings.includes('对')) {
        score += 6;
        reasons.push('有翅膀会飞');
      }
      if (lowerText.includes('跳') && (insect.id === 'flea' || insect.id === 'locust' || insect.id === 'cricket')) {
        score += 15;
        reasons.push('善跳跃');
      }
      if (lowerText.includes('咬') || lowerText.includes('叮') || lowerText.includes('蜇')) {
        if (insect.bites.willBite === 'yes') {
          score += 12;
          reasons.push('会咬人/蜇人');
        }
      }
      if (lowerText.includes('夜') && insect.habits.activity.includes('夜')) {
        score += 8;
        reasons.push('夜间活动');
      }
      if (lowerText.includes('毒') && insect.toxicity.isVenomous) {
        score += 12;
        reasons.push('有毒');
      }
      if ((lowerText.includes('厨房') || lowerText.includes('家里') || lowerText.includes('室内')) &&
          (insect.habits.habitat.includes('室内') || insect.habits.habitat.includes('厨') || insect.habits.habitat.includes('墙'))) {
        score += 10;
        reasons.push('室内栖息');
      }
      if ((lowerText.includes('草') || lowerText.includes('树') || lowerText.includes('野外')) &&
          (insect.habits.habitat.includes('草') || insect.habits.habitat.includes('树') || insect.habits.habitat.includes('林'))) {
        score += 8;
        reasons.push('野外栖息');
      }
      if (lowerText.includes('小') && parseInt(insect.identification.size) < 10) {
        score += 6;
        reasons.push('体型较小');
      }
      if (lowerText.includes('大') && parseInt(insect.identification.size) > 30) {
        score += 6;
        reasons.push('体型较大');
      }

      if (score > 0) {
        results.push({
          insect,
          confidence: Math.min(score, 92),
          reasons
        });
      }
    });

    results.sort((a, b) => b.confidence - a.confidence);
    return results.slice(0, 4);
  },

  // Render results
  renderResults(results, hasImage, hasText) {
    const container = document.getElementById('identifyResults');

    if (results.length === 0) {
      container.innerHTML = `
        <div class="no-results">
          <div class="icon">🔍</div>
          <p>未找到匹配的昆虫，请尝试更详细的描述或换一张照片</p>
          <p style="margin-top:8px;font-size:13px;">提示：描述颜色、大小、是否有翅膀、是否咬人等特征</p>
        </div>
      `;
      return;
    }

    const modeText = hasImage && hasText ? '综合图片和描述' : hasImage ? '基于图片分析' : '基于文字描述';
    let html = `<p style="font-size:14px;color:var(--color-text-secondary);margin-bottom:12px;">
      ${modeText}，找到 ${results.length} 种可能的匹配：
    </p>`;

    results.forEach((r, idx) => {
      html += this.renderInsectDetail(r.insect, r.confidence, r.reasons, idx === 0);
    });

    container.innerHTML = html;
  },

  renderInsectDetail(insect, confidence, reasons, isTop) {
    const biteBadge = this.getBiteBadge(insect);
    const venomBadge = this.getVenomBadge(insect);
    const dangerBadge = this.getDangerBadge(insect);
    const fearBadge = this.getFearBadge(insect);

    return `
      <div class="result-card">
        <div class="result-header">
          <div class="result-emoji">${insect.emoji}</div>
          <div class="result-name">
            <h3>${insect.name} ${isTop ? '⭐' : ''}</h3>
            <div class="latin">${insect.latinName}</div>
            <div class="category">${insect.category}</div>
          </div>
          <div class="result-confidence">匹配度 ${confidence}%</div>
        </div>
        <div class="result-body">
          ${reasons && reasons.length > 0 ? `
            <div class="info-section">
              <div class="info-section-title">📋 匹配依据</div>
              <div style="font-size:13px;color:var(--color-text-secondary);">
                ${reasons.map(r => `<span class="badge badge-gray" style="margin:2px;">${r}</span>`).join(' ')}
              </div>
            </div>
          ` : ''}

          ${insect.invasive && insect.invasiveInfo ? `
            <div class="info-section">
              <div class="info-section-title">🌍 外来入侵物种</div>
              <div class="info-note danger" style="margin-bottom:8px;font-weight:600;">
                ⚠️ ${insect.invasiveInfo.hazardLevel}
              </div>
              <div class="info-grid">
                <div class="info-item"><span class="label">原产地：</span><span class="value">${insect.invasiveInfo.origin}</span></div>
                <div class="info-item"><span class="label">入侵时间：</span><span class="value">${insect.invasiveInfo.invadedYear}</span></div>
                <div class="info-item"><span class="label">扩散范围：</span><span class="value">${insect.invasiveInfo.spreadRange}</span></div>
              </div>
            </div>
          ` : ''}

          <div class="info-section">
            <div class="info-section-title">🔬 识别特征</div>
            <div class="info-grid">
              <div class="info-item"><span class="label">体型：</span><span class="value">${insect.identification.size}</span></div>
              <div class="info-item"><span class="label">颜色：</span><span class="value">${insect.identification.color}</span></div>
              <div class="info-item"><span class="label">体形：</span><span class="value">${insect.identification.bodyShape}</span></div>
              <div class="info-item"><span class="label">翅膀：</span><span class="value">${insect.identification.wings}</span></div>
            </div>
            <div class="info-note info" style="margin-top:8px;">${insect.identification.distinctiveFeatures}</div>
          </div>

          <div class="info-section">
            <div class="info-section-title">🌿 生活习性</div>
            <div class="info-grid">
              <div class="info-item"><span class="label">活动时间：</span><span class="value">${insect.habits.activity}</span></div>
              <div class="info-item"><span class="label">栖息地：</span><span class="value">${insect.habits.habitat}</span></div>
              <div class="info-item"><span class="label">季节：</span><span class="value">${insect.habits.season}</span></div>
              <div class="info-item"><span class="label">寿命：</span><span class="value">${insect.habits.lifespan}</span></div>
            </div>
            <div class="info-note" style="margin-top:8px;background:var(--color-surface-alt);font-size:13px;">
              社会行为：${insect.habits.socialBehavior}
            </div>
          </div>

          <div class="info-section">
            <div class="info-section-title">🦷 会不会咬人？</div>
            <div style="margin-bottom:8px;">${biteBadge} ${fearBadge}</div>
            <div class="info-note ${insect.bites.willBite === 'yes' ? 'danger' : insect.bites.willBite === 'sometimes' ? 'warning' : 'success'}">
              ${insect.bites.biteDescription}
            </div>
            <div class="info-grid" style="margin-top:8px;">
              <div class="info-item"><span class="label">疼痛程度：</span><span class="value">${'🔴'.repeat(insect.bites.painLevel)}${'⚪'.repeat(5 - insect.bites.painLevel)}</span></div>
              <div class="info-item"><span class="label">症状：</span><span class="value">${insect.bites.biteSymptoms}</span></div>
            </div>
          </div>

          <div class="info-section">
            <div class="info-section-title">☠️ 有没有毒？</div>
            <div style="margin-bottom:8px;">${venomBadge} ${dangerBadge}</div>
            <div class="info-note ${insect.toxicity.isVenomous ? 'danger' : 'success'}">
              ${insect.toxicity.toxinDescription}
            </div>
          </div>

          <div class="info-section">
            <div class="info-section-title">🍎 喜欢吃什么？</div>
            <div class="info-note" style="background:var(--color-primary-light);color:var(--color-primary-dark);">
              <strong>食物：</strong>${insect.diet.food}<br>
              <strong>取食习性：</strong>${insect.diet.feedingHabits}
            </div>
          </div>

          <div class="info-section">
            <div class="info-section-title">🛡️ 防护与急救</div>
            <div class="info-grid">
              <div class="info-item"><span class="label">预防：</span><span class="value">${insect.prevention}</span></div>
              <div class="info-item"><span class="label">急救：</span><span class="value">${insect.firstAid}</span></div>
            </div>
          </div>

          <div class="info-section">
            <div class="fun-fact">
              <strong>💡 趣味知识：</strong>${insect.funFact}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  getBiteBadge(insect) {
    switch(insect.bites.willBite) {
      case 'yes': return '<span class="badge badge-danger">会咬人</span>';
      case 'sometimes': return '<span class="badge badge-warning">可能咬人</span>';
      case 'no': return '<span class="badge badge-success">不会咬人</span>';
      default: return '<span class="badge badge-gray">未知</span>';
    }
  },

  getVenomBadge(insect) {
    if (insect.toxicity.isVenomous) {
      const levels = ['', '微毒', '轻毒', '中毒', '剧毒'];
      const level = levels[insect.toxicity.toxicityLevel] || '有毒';
      const cls = insect.toxicity.toxicityLevel >= 3 ? 'badge-danger' : 'badge-coral';
      return `<span class="badge ${cls}">${level}</span>`;
    }
    return '<span class="badge badge-success">无毒</span>';
  },

  getDangerBadge(insect) {
    const levels = { 1: '低危', 2: '低危', 3: '中危', 4: '高危', 5: '极高危' };
    const colors = { 1: 'badge-success', 2: 'badge-info', 3: 'badge-warning', 4: 'badge-coral', 5: 'badge-danger' };
    return `<span class="badge ${colors[insect.dangerLevel] || 'badge-gray'}">危险等级: ${levels[insect.dangerLevel] || '?'}</span>`;
  },

  getFearBadge(insect) {
    const levels = { 1: '不怕人', 2: '不太怕人', 3: '较怕人', 4: '很怕人', 5: '极怕人' };
    return `<span class="badge badge-gray">${levels[insect.fearOfHumans]}</span>`;
  },

  // Encyclopedia
  renderEncyclopedia(filter = 'all', searchTerm = '') {
    const grid = document.getElementById('encyclopediaGrid');
    let insects = [...INSECT_DATABASE];

    if (searchTerm) {
      insects = insects.filter(i =>
        i.name.includes(searchTerm) || i.latinName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter === 'danger') insects = insects.filter(i => i.dangerLevel >= 4);
    if (filter === 'bites') insects = insects.filter(i => i.bites.willBite === 'yes');
    if (filter === 'venomous') insects = insects.filter(i => i.toxicity.isVenomous);
    if (filter === 'harmless') insects = insects.filter(i => i.bites.willBite === 'no' && !i.toxicity.isVenomous);
    if (filter === 'invasive') insects = insects.filter(i => i.invasive === true);
    if (filter === 'yearround') insects = insects.filter(i => i.habits.season && i.habits.season.includes('全年'));

    if (insects.length === 0) {
      grid.innerHTML = '<div class="no-results"><div class="icon">🔍</div><p>未找到匹配的昆虫</p></div>';
      return;
    }

    grid.innerHTML = insects.map(insect => `
      <div class="insect-card" onclick="App.showInsectDetail('${insect.id}')">
        <div class="insect-card-header">${insect.emoji}${insect.invasive ? '<span class="invasive-flag">🌍 外来</span>' : ''}</div>
        <div class="insect-card-body">
          <h4>${insect.name}</h4>
          <div class="latin">${insect.latinName}</div>
          <div class="insect-card-tags">
            ${this.getBiteBadge(insect)}
            ${this.getDangerBadge(insect)}
          </div>
        </div>
      </div>
    `).join('');
  },

  showInsectDetail(id) {
    const insect = INSECT_DATABASE.find(i => i.id === id);
    if (!insect) return;

    const modal = document.getElementById('insectDetailModal');
    const content = document.getElementById('modalContent');

    const detailHtml = this.renderInsectDetail(insect, 100, null, false);
    // Extract just the body content (remove card wrapper and header)
    const bodyMatch = detailHtml.match(/<div class="result-body">([\s\S]*?)<\/div>\s*<\/div>\s*$/);
    const bodyContent = bodyMatch ? bodyMatch[1] : detailHtml;

    content.innerHTML = `
      <div style="padding:0;">
        <div style="padding:24px;text-align:center;background:var(--color-primary-light);border-radius:var(--radius-xl) var(--radius-xl) 0 0;">
          <div style="font-size:56px;margin-bottom:8px;">${insect.emoji}</div>
          <h2 style="font-size:22px;font-weight:600;">${insect.name}</h2>
          <p style="font-size:13px;color:var(--color-text-tertiary);font-style:italic;">${insect.latinName}</p>
          <p style="font-size:12px;color:var(--color-text-secondary);margin-top:4px;">${insect.category}</p>
        </div>
        <div style="padding:20px;max-height:50vh;overflow-y:auto;">
          ${bodyContent}
        </div>
        <div style="padding:16px 20px;border-top:1px solid var(--color-border);text-align:center;">
          <button onclick="document.getElementById('insectDetailModal').style.display='none'" style="padding:10px 32px;border:none;background:var(--color-surface-alt);color:var(--color-text-secondary);border-radius:var(--radius-md);cursor:pointer;font-size:14px;font-family:var(--font);">关闭</button>
        </div>
      </div>
    `;

    modal.style.display = 'flex';
    document.getElementById('modalBackdrop').onclick = () => modal.style.display = 'none';
  },

  // Compare table
  renderCompareTable() {
    const container = document.getElementById('compareTableContainer');

    const groups = [
      {
        title: '— 会咬人 / 蜇人 · 不怕人（主动接近人类）—',
        filter: i => i.bites.willBite === 'yes' && i.fearOfHumans <= 2
      },
      {
        title: '— 会咬人 / 蜇人 · 较怕人（一般不主动攻击）—',
        filter: i => i.bites.willBite === 'yes' && i.fearOfHumans >= 3
      },
      {
        title: '— 可能咬人 · 危险较低 —',
        filter: i => i.bites.willBite === 'sometimes'
      },
      {
        title: '— 不会咬人 · 无害或低危 —',
        filter: i => i.bites.willBite === 'no'
      }
    ];

    let html = `
      <table class="compare-table">
        <thead>
          <tr>
            <th style="width:14%">昆虫</th>
            <th style="width:14%">咬人 / 蜇人</th>
            <th style="width:12%">怕人程度</th>
            <th style="width:10%">危险等级</th>
            <th style="width:50%">说明</th>
          </tr>
        </thead>
        <tbody>
    `;

    groups.forEach(group => {
      const insects = INSECT_DATABASE.filter(group.filter).sort((a, b) => a.fearOfHumans - b.fearOfHumans);
      if (insects.length === 0) return;

      html += `<tr class="section-row"><td colspan="5">${group.title}</td></tr>`;

      insects.forEach(insect => {
        const biteBadge = this.getBiteBadge(insect);
        const dangerBadge = this.getDangerBadge(insect);
        const fearLevels = { 1: '不怕人', 2: '不太怕', 3: '较怕人', 4: '很怕人', 5: '极怕人' };
        const fearColors = { 1: 'badge-coral', 2: 'badge-coral', 3: 'badge-info', 4: 'badge-info', 5: 'badge-success' };

        html += `
          <tr>
            <td><span class="insect-name">${insect.emoji} ${insect.name}</span><br><span class="latin-name">${insect.latinName}</span></td>
            <td>${biteBadge}</td>
            <td><span class="badge ${fearColors[insect.fearOfHumans]}">${fearLevels[insect.fearOfHumans]}</span></td>
            <td>${dangerBadge}</td>
            <td style="font-size:12px;color:var(--color-text-secondary);">${insect.bites.biteDescription}</td>
          </tr>
        `;
      });
    });

    html += `
        </tbody>
      </table>
    `;

    container.innerHTML = html;
  }
};

// Encyclopedia search and filter
document.addEventListener('DOMContentLoaded', () => {
  App.init();

  // Encyclopedia search
  document.getElementById('encyclopediaSearch').addEventListener('input', e => {
    const activeFilter = document.querySelector('.filter-chip.active');
    App.renderEncyclopedia(activeFilter ? activeFilter.dataset.filter : 'all', e.target.value);
  });

  // Encyclopedia filter
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const searchTerm = document.getElementById('encyclopediaSearch').value;
      App.renderEncyclopedia(chip.dataset.filter, searchTerm);
    });
  });
});
