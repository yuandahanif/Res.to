const nav = (): void => {
	const drawer: HTMLDivElement | null = document!.querySelector("nav.drawer");
	const hamburgerButton: HTMLButtonElement | null = document!.querySelector(
		"button.hamburger-button"
	);
	const outsideDrawer: HTMLElement | null = document!.querySelector(
		"main, footer"
  );
  // set visibility
  
	hamburgerButton?.addEventListener("click", (e) => {
    e.preventDefault();
		e.stopPropagation();
    
    // if (drawer) drawer.style.visibility = "visible";
		drawer?.classList.toggle("open");
	});

	outsideDrawer?.addEventListener("click", (e) => {
		// e.preventDefault();
		e.stopPropagation();
		drawer?.classList.remove("open");
	});
};

export default nav;
