function makeTransaction(quantity, pricePerDroid, customerCredits){
    const totalPrice = quantity * pricePerDroid;
    if (droidTotal > customerCredits){
        return "Insufficient funds!";
    }
    else{
        return "You ordered ${quantity} droids worth ${totalPrice} credits!"
    }
}