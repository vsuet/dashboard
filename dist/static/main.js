(() => {
	document.querySelector("[data-toggle-view-burger]").addEventListener("click", onClickBurger);
	const wrapper = document.querySelector(".wrapper");

	function onClickBurger(event) {
		event.currentTarget.classList.toggle("header__button--open");
		wrapper.classList.toggle("aside-open");
	}
})();
