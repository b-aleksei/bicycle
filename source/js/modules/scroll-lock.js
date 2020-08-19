const body = document.body;

const getScrollbarWidth = () => {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  body.append(outer);
  const inner = document.createElement('div');
  outer.append(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.remove();
  if (body.offsetHeight > window.innerHeight) {
    return scrollbarWidth;
  }
  return 0;
};

const getBodyScrollTop = () => {
  return (
    self.pageYOffset ||
    (document.documentElement && document.documentElement.ScrollTop) ||
    (body && body.scrollTop)
  );
};

const disableScrolling = () => {
  const scrollWidth = getScrollbarWidth();
  body.setAttribute('style', `padding-right: ${scrollWidth}px;`);
  body.dataset.scrollY = `${getBodyScrollTop()}`;
  body.style.top = `-${body.dataset.scrollY}px`;
  body.classList.add('body-lock');
};

const enableScrolling = () => {
  body.removeAttribute('style');
  body.classList.remove('body-lock');
  window.scrollTo(0, +body.dataset.scrollY);
};

export {disableScrolling, enableScrolling};
