// ============================================================
// ARASAKA INDEX.HTML PATCH — применить перед тегом </body>
// Автоматически обновляет нужные элементы на странице
// ============================================================

(function() {
  // 1. Обновить hero-subtitle (добавить маскота)
  const sub = document.querySelector('.hero-subtitle');
  if (sub && !sub.dataset.patched) {
    sub.textContent = 'Клан с чёткой структурой, системой ролей и наград. Маскот — Белый тигр.';
    sub.dataset.patched = '1';
  }

  // 2. Добавить новые quick-links (Вступление и Дни рождений)
  const ql = document.querySelector('.quick-links');
  if (ql && !ql.dataset.patched) {
    const newLinks = [
      {
        href: 'wiki.html#join',
        icon: '📝',
        title: 'Система вступления',
        sub: 'Голосование совета · испытательный срок',
        badge: true
      },
      {
        href: 'wiki.html#birthdays',
        icon: '🎂',
        title: 'Дни рождений',
        sub: 'Команды бота · поздравления в Discord',
        badge: true
      }
    ];
    newLinks.forEach(item => {
      const a = document.createElement('a');
      a.className = 'quick-link';
      a.href = item.href;
      a.innerHTML = `
        <div class="quick-link-left">
          <span class="quick-link-icon">${item.icon}</span>
          <div>
            <div>${item.title}${item.badge ? ' <span style="font-family:\'JetBrains Mono\',monospace;font-size:9px;letter-spacing:.05em;text-transform:uppercase;background:rgba(180,53,53,0.2);color:#d44040;border:1px solid rgba(180,53,53,0.3);border-radius:4px;padding:1px 5px;vertical-align:middle">new</span>' : ''}</div>
            <div class="quick-link-sub">${item.sub}</div>
          </div>
        </div>
        <span class="quick-link-arrow">›</span>`;
      ql.appendChild(a);
    });
    ql.dataset.patched = '1';
  }

  // 3. Обновить join-block описание
  const joinDesc = document.querySelector('.join-desc');
  if (joinDesc && !joinDesc.dataset.patched) {
    joinDesc.textContent = 'Подай заявку в Discord. Совет проголосует — за, против или воздержался. После одобрения — испытательный срок 7–14 дней.';
    joinDesc.dataset.patched = '1';
  }

  // 4. Обновить ticker
  const ticker = document.querySelector('.ticker-inner');
  if (ticker && !ticker.dataset.patched) {
    ticker.textContent = '〔 Новый маскот — Белый тигр 〕〔 Переработана система ролей 〕〔 Новые разделы вики: Вступление и Дни рождений 〕〔 Конкурс на лучший флаг клана — призовой фонд 500 АР 〕〔 Главный проект: башня высотой более 400 блоков 〕〔 Тестовый сервер обновлён 〕';
    ticker.dataset.patched = '1';
  }
})();
