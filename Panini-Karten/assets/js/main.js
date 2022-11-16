// console.log('test');


const btn = document.getElementById('sendDates');


class Panini {
    constructor(firstName, lastName, stageName, albums, singles, netWorth, age, quote) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.stageName = stageName;
        this.albums = albums;
        this.singles= singles;
        this.netWorth = netWorth;
        this.age = age;
        this.quote = quote;
    }

    createCard() {

        const albumsOutput = document.getElementById('albumsOutput');
        const hitsOutput = document.getElementById('hitsOutput');
        const netWorthOutput = document.getElementById('netWorthOutput');
        const ageOutput = document.getElementById('ageOutput');
        const firstNamOutput = document.getElementById('firstNameOutput');
        const lastNameOutput = document.getElementById('lastNameOutput');
        const stageNameOutput = document.getElementById('stageNameOutput');
        const quoteOutput = document.getElementById('quoteOutput');

        albumsOutput.innerHTML = this.albums;
        hitsOutput.innerHTML = this.singles;
        netWorthOutput.innerHTML = this.netWorth;
        ageOutput.innerHTML = this.age;
        firstNamOutput.innerHTML = this.firstName;
        lastNameOutput.innerHTML = this.lastName;
        stageNameOutput.innerHTML = this.stageName;
        quoteOutput.innerHTML = this.quote;

    }
}


btn.addEventListener('click', (event) => {
    event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const stageName = document.getElementById('stageName').value;
        const albums = document.getElementById('albums').value;
        const singles = document.getElementById('singles').value;
        const netWorth = document.getElementById('netWorth').value;
        const age = document.getElementById('age').value;
        const quote = document.getElementById('quote').value;

        // für array pic
        const bgImg = document.getElementById('newCard');

        bgImg = [];

        console.log(firstName, lastName, stageName, albums, singles, netWorth, age, quote);

    const newCharacter = new Panini(firstName, lastName, stageName, albums, singles, netWorth, age, quote)
    console.log(newCharacter);

    newCharacter.createCard();


});

