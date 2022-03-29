import '@dile/dile-menu-hamburger/dile-menu-hamburger.js';
import '@dile/dile-nav/dile-nav.js';
import '@dile/dile-pages/dile-pages.js';
import '@dile/dile-selector/dile-selector.js';
import '@dile/dile-selector/dile-selector-item.js';

document.getElementById('selector').addEventListener('dile-selected-changed', function() {
    document.querySelector('dile-menu-hamburger').close();
});