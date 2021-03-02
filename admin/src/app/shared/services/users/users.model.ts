export class User {
    public id: string
    public name: string
    public email: string
    public username: string
    public is_active: boolean
    public date_joined: string

    constructor(
        id: string,
        name: string,
        email: string,
        username: string,
        is_active: boolean,
        date_joined: string
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.username = username
        this.is_active = is_active
        this.date_joined = date_joined
    }
}