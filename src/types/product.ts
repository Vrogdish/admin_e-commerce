export interface Product {
    id : string
    name : string
    description : string
    price : number
    imageUrl : string
    quantity : number
}


export interface InputsProduct {
    name : string
    description : string
    price : number
    imageFile : FileList
    quantity : number
}