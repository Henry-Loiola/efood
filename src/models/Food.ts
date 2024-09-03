class Food {
    id: number
    foodTitle: string
    foodPhoto: string
    foodDescription: string
    foodPhotoAlt: string
    foodServe: string
    foodPrice: number

    constructor(
        id: number,
        foodTitle: string,
        foodPhoto: string,
        foodDescription: string,
        foodPhotoAlt: string,
        foodServe: string,
        foodPrice: number
    ) {
        this.id = id
        this.foodTitle = foodTitle
        this.foodPhoto = foodPhoto
        this.foodDescription = foodDescription
        this.foodPhotoAlt = foodPhotoAlt
        this.foodServe = foodServe
        this.foodPrice = foodPrice
    }
}

export default Food