console.log('test');


class Person {
    constructor(name, age) {

        this.name = name;
        this.age = age;
    }

    // info() {
    //     console.log(this.name + ' ist ' + this.age + ' Jahre alt');
    // }

    write() {
        const ausgabe = document.getElementById("result");
        const check = document.getElementById("examCheck").checked;
        console.log(check);
        const li = document.createElement("li");

        if (check == false) {
            li.style.color = 'red';
        }

        ausgabe.appendChild(li);
        li.innerHTML = this.name + ', ist ' + this.age + ' Jahre alt';
    }  
}

// const output = new Person('Weihnachtsmann', 1043);
// output.info();


const btnSubmit = document.getElementById("button");

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const newMember = new Person(name, age)

    newMember.write();
});