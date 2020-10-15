class Contact {
    /**
     * Creates an instance of Contact.
     * @param {string} lastName
     * @param {string} firstName
     * @param {string} address
     * @param {string} city
     * @param {string} email
     * @memberof Contact
     */
    constructor(lastName, firstName, address, city, email) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.city = city;
        this.email = email;
    }
}