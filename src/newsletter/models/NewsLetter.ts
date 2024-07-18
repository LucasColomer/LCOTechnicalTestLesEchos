export class NewsLetter {
    id!: number;
    image!: string;
    description!: string;
    title!: string;
    site!: string;
    subscriptions!: [string];

    constructor(initialize?: any) {
        if (!initialize) return;
        if (initialize.id) this.id = initialize.id;
        if (initialize.image) this.image = initialize.image;
        if (initialize.description) this.description = initialize.description;
        if (initialize.title) this.title = initialize.title;
        if (initialize.site) this.site = initialize.site;
        if (initialize.subscriptions) this.subscriptions = initialize.subscriptions
    }
}