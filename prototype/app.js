/* ==========================================================================
   JAÉ — Router minimalista + helpers de protótipo
   ========================================================================== */

/**
 * navigate(id)
 * Troca a tela ativa: remove .active de todas as .screen e ativa #screen-<id>.
 * Atualiza o estado .active da bottom-nav (casa o data-nav do item com o id),
 * e dá scroll ao topo da área rolável.
 * @param {string} id  sufixo do id da tela, ex: "home" => #screen-home
 */
function navigate(id) {
  // 1) troca de tela
  var screens = document.querySelectorAll('.screen');
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.remove('active');
  }
  var target = document.getElementById('screen-' + id);
  if (target) target.classList.add('active');

  // 2) atualiza bottom-nav (item com data-nav igual ao id fica .active)
  var navItems = document.querySelectorAll('.nav-item');
  for (var j = 0; j < navItems.length; j++) {
    var navId = navItems[j].getAttribute('data-nav');
    if (navId && navId === id) {
      navItems[j].classList.add('active');
    } else {
      navItems[j].classList.remove('active');
    }
  }

  // 3) scroll ao topo
  var body = document.querySelector('.app-body');
  if (body) body.scrollTop = 0;
  window.scrollTo(0, 0);
}

/**
 * showToast(msg)
 * Exibe uma mensagem temporária (toast) por ~2.2s.
 * Cria/reusa um único elemento .toast dentro do .app.
 * @param {string} msg  texto a exibir
 */
var _toastTimer = null;
function showToast(msg) {
  var app = document.querySelector('.app') || document.body;
  var toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast';
    app.appendChild(toast);
  }
  toast.textContent = msg;
  // força reflow para reanimar
  void toast.offsetWidth;
  toast.classList.add('show');

  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function () {
    toast.classList.remove('show');
  }, 2200);
}

/* --------------------------- Bottom sheets ------------------------------- */
/**
 * openSheet(id) / closeSheet(id)
 * Abre/fecha um .modal pelo id (adiciona/remove .open).
 */
function openSheet(id) {
  var m = document.getElementById(id);
  if (m) m.classList.add('open');
}
function closeSheet(id) {
  var m = document.getElementById(id);
  if (m) m.classList.remove('open');
}

/* ------------------------------ Chips ------------------------------------ */
/**
 * selectChip(el)
 * Marca o chip clicado como .selected dentro do mesmo .chip-row,
 * removendo a seleção dos irmãos.
 */
function selectChip(el) {
  var row = el.closest('.chip-row');
  if (row) {
    var chips = row.querySelectorAll('.chip');
    for (var i = 0; i < chips.length; i++) chips[i].classList.remove('selected');
  }
  el.classList.add('selected');
}

/* ------------------------------ Init ------------------------------------- */
// Fecha modal ao clicar no backdrop (fora do .sheet)
document.addEventListener('click', function (e) {
  if (e.target.classList && e.target.classList.contains('modal')) {
    e.target.classList.remove('open');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  navigate('onboarding');
});
