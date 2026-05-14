// Qty buttons
    document.querySelectorAll('.item-qty button').forEach(b => {
      b.addEventListener('click', () => {
        const inp = b.parentElement.querySelector('input');
        const d = parseInt(b.dataset.d, 10);
        inp.value = Math.max(1, parseInt(inp.value || '1', 10) + d);
      });
    });
