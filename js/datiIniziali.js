const iconList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const selectType = document.getElementById("select");

const container = document.querySelector(".container");
console.log("questo è il container", container);



const arrayTypeAnimal = iconList.filter(singleIcon => singleIcon.type === "animal");
console.log(arrayTypeAnimal);

const arrayTypeVegetables = iconList.filter(singleIcon => singleIcon.type === "vegetable");
console.log(arrayTypeVegetables);

const arrayTypeUser = iconList.filter(singleIcon => singleIcon.type === "user");
console.log(arrayTypeUser);


let color = "";




function generazioneCard(tipoArray) {

	container.innerHTML = "";

	for (i = 0; i < tipoArray.length; i++) {
		const singleIcon = tipoArray[i];

		const { name, prefix, type, family } = singleIcon;


		//COLORO LE ICONE IN BASE AL TYPE CHE HANNO
		//se il type è animal allora il colore sarà blu
		if (type === "user") {
			color = "text-primary";
		} //se il type è user allora il colore sarà viola
		else if (type === "animal") {
			color = "text-success";
		}  //se il type è verdure allora il colore sarà arancione 
		else {
			color = "text-warning";
		}
		console.log(type);

		const card = `<div class="card">
					<i class="${family} ${prefix}${name} fs-3 ${color}"></i>
					<p class="m-0">${name}</p>
				</div>`;

		console.log("questa è una carta", card, "questa è una icona", singleIcon.type);

		container.innerHTML += card;
	}
}

selectType.addEventListener("change", function () {
	const formType = selectType.value;
	console.log(formType);

	switch (formType) {
		case "Vegetable":
			generazioneCard(arrayTypeVegetables);
			break;

		case "User":
			generazioneCard(arrayTypeUser);
			break;

		case "Animals":
			generazioneCard(arrayTypeAnimal);
			break;

		case "All":
			generazioneCard(iconList);
			break;
	}
});;





//quando nel select c'è Animal devo stampare solo le card con type animal

//quando nel select c'è Vegetable devo stampare solo le card con type Vegetable

//quando nel select c'è User devo stampare solo le card con type User

//quando nel select c'è All devo stampare tutte le card










/* Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone */