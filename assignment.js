const inputs = document.querySelectorAll("input");
const imgBtn = document.querySelector(".formButton");
const add = document.querySelector(".addBtn");
const setRecipe = document.querySelector(".setRecipe");
const setImg = document.querySelector("img");
const allDisH2 = document.querySelectorAll(".allDes h2");
const calories = document.querySelector(".calories");
const setIng = document.querySelector(".formRecipes h3");
const createCard = document.querySelector(".createCard");
const error = document.querySelector(".error");

const formRecipes = document.querySelector(".formRecipes");

let getImg = [];

let cards = [];


createCard.onclick = () => {

    let cartValue = localStorage.getItem("card")

    console.log(cartValue)
    if (cartValue) {
        cartValue =JSON.parse(cartValue)
        cartValue.push(cards)
        localStorage.setItem("card", JSON.stringify(cartValue))
    } else {
        localStorage.setItem("card", JSON.stringify([cards]))
    }


}


function allOnclicks() {

    let dish = []
    let setInputs = []
    let moreIngredients = []

    const values = {
        dish,
        moreIngredients,
        setInputs,
    };

    console.log(values)

    imgBtn.onclick = () => {
        const dishImg = setImg.src = getImg[0].strMealThumb
        allImg();
        dish.push(dishImg)
    };

    setRecipe.onclick = () => {


           const title =allDisH2[0].innerText = inputs[0].value;
           const description = allDisH2[1].innerText = inputs[2].value;
           const calories1 = calories.innerHTML = Number(inputs[3].value);

            let invalid = false

           if (inputs[0].value.length < 3) {
               inputs[0].classList.add("invalids")
               error.innerHTML += "Name field can't be empty" + "<br>"
               invalid = true
           } else {
               error.innerHTML = ""
               inputs[0].classList.remove("invalids");
           }

         if (inputs[2].value.length < 3) {
            inputs[2].classList.add("invalids")
            error.innerHTML += "Name field can't be empty" + "<br>"
            invalid = true
         } else {
            error.innerHTML = ""
            inputs[2].classList.remove("invalids");
        }

        if (inputs[3].value.length < 0) {
            inputs[3].classList.add("invalids")
            error.innerHTML += "Name field can't be empty" + "<br>"
            invalid = true
        } else {
            error.innerHTML = ""
            inputs[3].classList.remove("invalids");
        }
        if (invalid) return;

        inputs[0].value = ""
        inputs[2].value = ""
        inputs[3].value = ""

        setInputs.push(title, description, calories1)
    };

    add.onclick = () => {
          const  ingredients = setIng.innerHTML = inputs[1].value
          moreIngredients.push(ingredients);
        inputs[1].value = ""
    };

    cards = values

}

allOnclicks()






function allImg() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            getImg = data.meals;
        });
}

allImg();
