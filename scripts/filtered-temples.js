// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
];

createTemplateCard(temples);

const allTemple = document.querySelector("#all");
allTemple.addEventListener("click", () => {
	createTemplateCard(temples);
});


const smallTemple = document.querySelector("#small");
smallTemple.addEventListener("click", () => {
	createTemplateCard(temples.filter(temple => temple.area < 10000));
});

const largeTemple = document.querySelector("#large");
largeTemple.addEventListener("click", () => {
	createTemplateCard(temples.filter(temple => temple.area > 90000));
});

const newTemple = document.querySelector("#new");
newTemple.addEventListener("click", () => {
createTemplateCard(temples.filter(temple => {
	const year = parseInt(temple.dedicated.match(/\d{4}/)[0]);
	return year > 2000;
  }));
  });

  const oldTemple = document.querySelector("#old");
  oldTemple.addEventListener("click", () => {
  createTemplateCard(temples.filter(temple => {
	  const year = parseInt(temple.dedicated.match(/\d{4}/)[0]);
	  return year < 2000;
	}));
	});



function createTemplateCard(filteredTemples) {
		document.querySelector(".res-grid").innerHTML = "";
		filteredTemples.forEach(temple => {

		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let image = document.createElement("img");	
		
		// CSS
		card.classList.add("temple-card");

		name.textContent = temple.templeName;
		location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
		dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
		area.innerHTML = `<strong>Area:</strong> ${temple.area}`;

		image.setAttribute("src", temple.imageUrl);
		image.setAttribute("alt", `${temple.templeName} Temple`);
		image.setAttribute("loading", "lazy");
		image.setAttribute("width", "100%");
		image.setAttribute("min-height","300px" );
		
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(image);


		document.querySelector(".res-grid").appendChild(card);
	});
};
