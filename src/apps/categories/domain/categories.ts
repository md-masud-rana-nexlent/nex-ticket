export class Category{
    constructor(
        private readonly id:string,
        private readonly name:string,
        private readonly slug:string,
        private readonly parent:string|null,
    ){}
}