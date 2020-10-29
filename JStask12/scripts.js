/*window.sessionStorage.setItem('user', 'Bob');
window.localStorage.setItem('user', 'Alex');

console.log(window.localStorage.getItem('user'));

//window.localStorage.removeItem('user');
//window.sessionStorage.removeItem('user'):
//window.localStorage.clear();
//window.sessionStorage.clear();                                                                        

window.sessionStorage.setItem('test', '1');
window.sessionStorage.setItem('test2', '2');
window.sessionStorage.setItem('test3', '3');
window.localStorage.setItem('test', '1');
window.localStorage.setItem('test2', '2');
window.localStorage.setItem('test3', '3');

console.log(window.sessionStorage.length);
console.log(window.localStorage.length);

let key = Object.keys(window.localStorage);
for (let key of key) {

    console.log(`${key}: ${localStorage.getItem(key)}`);
}

console.log(localStorage);
console.log(sessionStorage);

let contactsData = [];

const contactUpdate = function() {

    contactsData = [];

    let localContactsData = localStorage.getItem(contactsData);
    if (localContactsData.length > 0) contactsData = JSON.parse(localContactsData);

    let contactsList = document.querySelector('.contacts_list ul');
    contactsData.forEach(function(contact, id) {
            let elemontact = document.createElement('li');

            elemContact.innerHTML = <
                div class = "id" > $ { id } < /div>  <
            div class = "name" > $ { contact.name } < /div>  <
            div class = "phone" > $ { contact.phone } < /div>


            contactsList.appendChild(elemContact);

        }
    }

    const contactAdd = function() {
        let form = this.closest('.form_add'),
            imputName = form.querySelector('input[name="name"]').value,
            imputPhone = form.querySelector('input[name="phone"]').value;
        console.log(inputName, inputPhone);

        if (inputName.length == 0 || inputName == ' ' || inputPhone.length == 0 || inputPhone == ' ') return;

        sessionStorage.setItem('contactInputName', inputName);
        sessionStorage.setItem('contactInputPhone', inputPhone);

        let contact = {
            name: inputName,
            phone: inputPhone
        };

        contactsData.push(contact);


        localStorage.setItem('contactsData', JSON.stringify(contactsData));

        contactUpdate();

    }

    const contactSave = function() {

    }


    let buttonAdd = document.querySelector('.form_add . add');
    buttonSave = document.querySelector('.form_add . save');


    if (buttonAdd) buttonAdd.addEventListener('click', contactAdd);
    if (buttonSave) buttonSave.addEventListener('click', contactSave);
    if (window.location.pathname == '/index.html') {
        contactsUpdate();

        let contactInputName sessionStorage.getItem('contactInputName'),
            contactInputPhone sessionStorage.getItem('contactInputPhone'),

            if (contactInputName &&
                contactInputName.length > 0 &&
                contactInputPhone && contactInputPhone.length.value > 0) {
                let form = document.querySelector('.form_add'),
                    inputName = form.querySelector('input[name="name"]'),
                    inputPhone = form.querySelector('input[name="phone"]'),

                    inputName.value = contactInputName;
                inputPhone.value = contactInputPhone;

            }
    }
}*/