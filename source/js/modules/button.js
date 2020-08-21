const addElement = function (e) {
  const button = e.currentTarget;
  const el = button.querySelector('span[data-wave]');
  const mValue = Math.max(button.clientWidth, button.clientHeight);
  el.style.width = el.style.height = mValue + 'px';

  el.classList.remove('pulse');
  setTimeout(() => {
    let rect = button.getBoundingClientRect();
    if (e.clientX <= 0) {
      el.style.left = 0 + 'px';
      el.style.top = rect.height / 2 - mValue / 2 + 'px';
    } else {
      el.style.left = e.clientX - rect.left - mValue / 2 + 'px';
      el.style.top = e.clientY - rect.top - mValue / 2 + 'px';
    }
    el.classList.add('pulse');
  });
};

const buttons = document.querySelectorAll('button[data-pulse]');
if (buttons.length) {
  buttons.forEach((b) => {
    const el = document.createElement('span');
    el.dataset.wave = '';
    b.append(el);

    b.addEventListener('click', addElement);
  });
}

