export const FRUITS_NAME ="FRUITS_NAME"

export const storeFruitItems = (fruitName) => {
console.log('**listttt',fruitName)
    return {
        type:FRUITS_NAME ,
        fruitName: fruitName
    }
}