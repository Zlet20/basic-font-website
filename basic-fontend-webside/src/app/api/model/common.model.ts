
export class Response<T>{
    content!: T;
    hasErrors!: boolean;
    errors!: string;
    timeStamp!: Date;
    status!: number;
}