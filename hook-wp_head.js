<script>
(function () {
  const key = 'color-scheme';
  let v = localStorage.getItem(key);

  if (!v) {
    v = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-scheme', v);
})();
</script>