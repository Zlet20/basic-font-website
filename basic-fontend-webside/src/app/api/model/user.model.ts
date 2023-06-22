export class UserRegister {

    username: string;
    password: string;
    email: string;
    displayName: string;

    constructor(username: string, password: string, email: string, displayName: string){
        this.username = username;
        this.password = password;       
        this.email = email;
        this.displayName = displayName;
       
    }
}

export class UserRp{
    id!: string;
    username!: string;
    displayName!: string;
    email!: string;
    firstName!: string;
    lastName!: string;
    avatar!: string;
    department!: string;
    major!: string;
    hobbies!: string;
    facebook!: string;
    status!: string;
}

export class LoginRequest{
    username: string;
    password: string;

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }
}

export class LoginResponse{
    jwt!: string;
    displayName!: string;
}