import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";

import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import fetchAnimais from "./modules/fetch-animais.js";

// Scroll
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

// Accordion
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

// TabNav
const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

// Modal
const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

// Tooltip
const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

// Fetch Animais
fetchAnimais("../../Animaisapi.json", ".numeros-grid");
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();
initAnimacaoScroll();
