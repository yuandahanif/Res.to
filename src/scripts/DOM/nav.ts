/* eslint-disable no-unused-expressions */
const nav = (): void => {
  const drawer: HTMLDivElement | null = document!.querySelector('nav.drawer');
  const hamburgerButton: HTMLButtonElement | null = document!.querySelector(
    'button.hamburger-button',
  );
  const outsideDrawer: HTMLElement | null = document!.querySelector(
    'main, footer',
  );
  // set visibility

  hamburgerButton?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    // if (drawer) drawer.style.visibility = "visible";
    drawer?.classList.toggle('open');
  });

  outsideDrawer?.addEventListener('click', (event) => {
    // e.preventDefault();
    event.stopPropagation();
    drawer?.classList.remove('open');
  });
};

export default nav;
