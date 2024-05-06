class Human {
    name: string;
    phoneNumber: string;
    address: string;
    gender: string
    constructor(name: string, phoneNumber: string, address: string, gender: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.gender = gender;
    }
}
    
    class AddressBook {
        private contacts: Contact[] = [];

        addContact(contact: Contact) {
            this.contacts.push(contact);
        }

        findContactByName(name: string) {
            return this.contacts.find(contact => contact.name === name);
        }

        findContactsByPhoneNumber(phoneNumber: string) {
            return this.contacts.filter(contact => contact.phoneNumber === phoneNumber);
        }

        getContacts() {
            return this.contacts;
        }
    }

    class Contact extends Human {
        constructor(name: string, phoneNumber: string, address: string, gender: string) {
            super(name, phoneNumber, address, gender);
        }
    }
    const addressBook = new AddressBook();
    addressBook.addContact(new Contact('George', '+233-525252', '7, Koleoso Str', 'Male'));
    addressBook.addContact(new Contact('Mary', '+255-636363', '8 Dream Town', 'Female'));
    addressBook.addContact(new Contact('Troy', '+11-717171', '9, Texas Road', 'Male'));
    console.log(addressBook);