


const main =document.querySelector(".container")
const inputs =document.querySelectorAll("input")
const button =document.querySelector("button")

let cards = []

function fun() {
    const card = JSON.parse(localStorage.getItem("card"))
    getProds(card)
    cards = card
}

fun()
function getProds(data){

    console.log(data)
    main.innerHTML = ""
    data.map(set =>{

        main.innerHTML += `
                <div class="form">
                    <img src="${set.dish[0]}" alt="">
                    <div>Ingredient: ${set.moreIngredients}</div>
                    <div>Description: ${set.setInputs[0]}</div>
                    <div>Calories:${set.setInputs[2]} </div>
                    <div> </div>
                </div>
         `
    } )


 }


button.onclick = () => {

    const inputsValue = {
        description: inputs[0].value,
        calories: Number(inputs[1].value),
        ingredients: inputs[2].value
    }


    let result = cards
    //// some there this code have issues with reading it.
    if (inputsValue.ingredients) result = card.filter(cards => cards.moreIngredients[0] === inputsValue.ingredients)
    if (inputsValue.calories) result = result.filter(cards => cards.setInputs[2] === inputsValue.calories)
    if (inputsValue.description) result = result.filter(cards => cards.setInputs[0] === inputsValue.description)
    fun()
    getProds(cards)
    console.log(result)
}