class User {
    constructor(id, name, email, address, phone) {
        this.data = { id, name, email, address, phone }
    }

    get userInfo() {
        return this.data
    }
    set userInfo(data) {
        this.data = data
    }

}

let user = new User(id: 0, name: 'Bob', email: 'bod@gmail.com', address: 'pushkinskaya 3', phone: '+375299999999')
console.log(user.userInfo)
console.log(user.userInfo = { id: 1, name: 'David', email: user.userInfo.email, address: 1 || user.userInfo.address, phone: user.userInfo.phone })

class Contact {
    constructor() {
        this.data = [

        ]
    }

    add(name, email, address, phone) {
        const newUser = new User(id: this.data.length ? this.data[this.data.length - 1].user.data.id + 1 : 0, name, email, address, phone)
        this.data.push({ user: newUser })
    }
    remowe(id) {
        this.data = this.data.filter(item => item.user.data. !== 1)
    }
    get contactsInfo() {
        return this.data
    }
}

let contact = new Contact()
contact.add(name: 'Bob', email: 'bod@gmail.com', address: 'pushkinskaya 3', phone: '+375299999999')
contact.add(name: 'Frank', email: 'bod@gmail.com', address: 'pushkinskaya 3', phone: '+375299999999')
contact.add(name: 'Artem', email: 'bod@gmail.com', address: 'pushkinskaya 3', phone: '+375299999999')
contact.add(id: 1)
contact.add(name: 'Artem', email: 'bod@gmail.com', address: 'pushkinskaya 3', phone: '+375299999999')
contact.add(id: 3)