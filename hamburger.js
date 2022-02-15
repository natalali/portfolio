// Progressive enhancement - only create the hamburger if
// scripts are enabled
const hbg = document.createElement("div");
hbg.classList.add('Hamburger');
const hgbDiv = document.createElement("div");
hbg.appendChild(hgbDiv);
document.querySelector("header").prepend(hbg);

document.querySelector(".Hamburger").addEventListener("click",
    () => {
        document.querySelector(".Menu").classList.toggle("hidden");
		document.querySelector(".Hamburger").classList.toggle("fixed");
    }
);