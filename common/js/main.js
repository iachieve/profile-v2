async function load_home() {
  document.getElementById('sidebar').innerHTML =
    await (await fetch('/components/menu_links.html')).text();
}
load_home();
