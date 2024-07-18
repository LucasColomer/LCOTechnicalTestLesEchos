export class User {
    id!: number;
    firstName!: string;
    lastName!: string;
    gender!: string;
    email!: string;
    subscriptions!: string[];

    constructor(initialize?: any) {
        if (!initialize) return;
        if (initialize.id) this.id = initialize.id;
        if (initialize.firstName) this.firstName = initialize.firstName;
        if (initialize.lastName) this.lastName = initialize.lastName;
        if (initialize.email) this.email = initialize.email;
        if (initialize.gender) this.gender = initialize.gender;
    }
}