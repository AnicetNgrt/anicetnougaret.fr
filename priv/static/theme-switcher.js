let dt_button = document.querySelector('#jade-theme-button');
let lt_button = document.querySelector('#ocean-theme-button');
let st_button = document.querySelector('#sepia-theme-button');

dt_button.addEventListener('click', function(){ 
    change_theme('jade');
    untoggle_all();
    toggle(dt_button);
});

lt_button.addEventListener('click', function(){ 
    change_theme('ocean');
    untoggle_all();
    toggle(lt_button);
});

st_button.addEventListener('click', function(){ 
    change_theme('sepia');
    untoggle_all();
    toggle(st_button);
});

function untoggle_all() {
    //dt_button.textContent = "◌ " + dt_button.textContent.substring(2);
    //lt_button.textContent = "◌ " + lt_button.textContent.substring(2);
    //st_button.textContent = "◌ " + st_button.textContent.substring(2);
    dt_button.classList.remove('toggled');
    lt_button.classList.remove('toggled');
    st_button.classList.remove('toggled');
}

function toggle(bu) {
    bu.classList.add('toggled');
    //bu.textContent = "● " + bu.textContent.substring(2);
}

function change_theme(theme) {
    document.body.classList.remove(get_current_theme()); 
    document.body.classList.add(theme);
    persist_theme(theme);
}

function get_current_theme() {
    var theme = localStorage.getItem('theme');
    if (!theme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'jade';
        }
        return 'ocean';
    }
    return theme;
}

function persist_theme(theme) {
    localStorage.setItem('theme',theme);
}

var current_theme = get_current_theme();

change_theme(current_theme);
untoggle_all();
switch(current_theme) {
    case 'jade': toggle(dt_button); break;
    case 'ocean': toggle(lt_button); break;
    case 'sepia': toggle(st_button); break;
}