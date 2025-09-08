function _toggleSection(sectionId) {
	const section = document.getElementById(sectionId);
	const isHidden = section.classList.contains("hidden");

	// Hide all sections
	document.querySelectorAll('[id^="req"]').forEach((el) => {
		el.classList.add("hidden");
	});

	// Show clicked section if it was hidden
	if (isHidden) {
		section.classList.remove("hidden");
	}
}

// Show first section by default
document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("req1").classList.remove("hidden");
});
