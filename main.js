const maleFirstname = ["Gabriel", "Raphaël", "Léo", "Louis", "Lucas", "Adam", "Arthur", "Jules", "Hugo", "Maël", "Ethan", "Liam", "Paul", "Nathan", "Gabin", "Sacha", "Noah", "Tom", "Mohamed", "Théo", "Aaron", "Eden", "Noé", "Timéo", "Victor", "Martin", "Mathis", "Nolan", "Enzo", "Axel", "Léon", "Antoine", "Marius", "Naël", "Robin", "Valentin", "Clément", "Baptiste", "Tiago", "Rayan", "Samuel", "Amir", "Augustin", "Maxime", "Eliott", "Maxence", "Mathéo", "Gaspard", "Evan", "Alexandre"];

const femaleFirstname = ["Emma", "Jade", "Louise", "Alice", "Chloé", "Inès", "Lina", "Léa", "Rose", "Léna", "Anna", "Mila", "Mia", "Ambre", "Elena", "Julia", "Manon", "Juliette", "Lou", "Zoé", "Camille", "Lola", "Eva", "Agathe", "Jeanne", "Lucie", "Nina", "Sarah", "Romane", "Inaya", "Charlotte", "Léonie", "Adèle", "Romy", "Iris", "Luna", "Louna", "Sofia", "Margaux", "Léana", "Clémence", "Olivia", "Elise", "Victoria", "Clara", "Victoire", "Aya", "Margot", "Noûr", "Giulia"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => `${maleFirstname[getRandomNumber(maleFirstname.length)]}
                                ${femaleFirstname[getRandomNumber(femaleFirstname.length)]}`;

const setRandomName = () => {
    document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate').addEventListener('click', setRandomName);

setRandomName();