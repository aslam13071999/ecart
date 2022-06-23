

export class CartService {
    constructor(){
        this.cart_items = [
        ] 
    }

    add_product(cart_item){
        this.cart_items.push(cart_item)
    }

}