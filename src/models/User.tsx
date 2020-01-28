export default class User {
    constructor(discountCode: string, email: string, tickets: string) {
        this.discountCode = discountCode
        this.email = email
        this.tickets = tickets
    }

    discountCode: string
    email: string
    tickets: string
}