<script>
document.addEventListener('DOMContentLoaded', () => {
  const key = 'color-scheme';
  const toggle = document.getElementById('colormode');
  const saved = localStorage.getItem(key);
  const initialState = saved ? saved === 'dark'
                             : window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (toggle) {
    toggle.checked = initialState;
    toggle.addEventListener('change', (e) => {
      const v = e.target.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-scheme', v);
      localStorage.setItem(key, v);
    });
  }
});
</script>