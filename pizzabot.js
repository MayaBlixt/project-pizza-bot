//Iteration 1 - Setting everything up.
const vegetarian = "vegetarian"
const hawaiian = "hawaiian"
const pepperoni = "pepperoni"
const calzone = "calzone"
const kebab = "kebab"

// Iteration 4 - Finalize the order
const handleOnSubmit = (event) => {
    event.preventDefault()
    //Get nr of pizzas
    let orderQuantity = document.getElementById("nrOfPizzas").value

    //Get pizza sort
    let orderName = document.getElementById("pizzaSort").value
    let pizzaPrice = pricePerPizza(orderName)

    //Calculate totalcost for pizza
    const orderTotal = orderQuantity * pizzaPrice

    //Print out message to customer
    let orderTime = calculateCookingTime(orderQuantity)
    let pizzaImg = pizzaImages(orderName)
    document.getElementById("pizzaImg").src = pizzaImg
    
    //Set pizza picture to display block
    let x = document.getElementById("pizzaImg")
    x.style.display = "block"

    //Display customer order confirmation
    let info = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${orderTime} minutes.`
    document.getElementById("submitInfo").innerHTML = info

}

const form = document.getElementById("form")
form.onsubmit = handleOnSubmit

//Sets the pizza image 
const pizzaImages = (orderName) => {

    if (orderName == vegetarian) {
        return "./Vegetariana.jpg"
    } else if (orderName == hawaiian) {
        return "./Hawaiian.jpg"
    } else if (orderName == pepperoni) {
        return "./Pepperoni.jpg"
    } else if (orderName == calzone) {
        return "./Calzone.jpg"
    } else if (orderName == kebab) {
        return "./Kebab.jpg"
    }

}
//Sets the pizza price
const pricePerPizza = (orderName) => {
    if ((orderName == vegetarian) || (orderName == hawaiian) || (orderName == pepperoni)) {
        return 80

    } else {
        return 100
    }

}
//Add conditonals (Iteration 5)
const calculateCookingTime = (orderQuantity) => {
    let orderTime = 0
    if (orderQuantity <= 2) {
        orderTime = 10
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        orderTime = 15

    } else if (orderQuantity >= 6) {
        orderTime = 20
    }
    return orderTime
}



