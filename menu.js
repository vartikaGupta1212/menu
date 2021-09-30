const menu = [
{
id:1,
title:"Channa dhal",
category:"Lunch",
image:"images/chanadaal.jpg",
price:241,
des:`A spicy stew-like meal made with pulses and a wonderful alternative to soup`
},
{
  id:2,
title:"Chicken and tomato spiced curry",
category:"Dinner",
image:"images/Chicken-Tomato-Spiced-Curry.jpg",
price:320,
des:`This easy chicken curry is ready in just 30 mins and only needs a handful of ingredients to
add real flavour. Madras curry paste creates a hearty, comforting meal, but you can add more if you
like it very hot.`
},
{
id:3,
title:"Fruity buttermilk pancakes",
image:"images/Fruity-Buttermilk-Pancakes.jpg",
category:"Dessert",
price:89,
des:`Start the day with these fluffy fruit pancakes. Eggs and buttermilk are whisked into self raising flour,
then the batter is sweetened with honey and blueberries. Swap the flour with wholemeal self raising flour for an extra healthy take.`
},
{
id:4,
title:"Vegan nut roast",
image:"images/VeganNutRoast.jpg",
category:"Lunch",
price:239,
des:`A nut roast is a fantastic alternative to a meat main course or traditional Christmas dinner. This delicious recipe is full of hearty
veg – butternut squash, aubergine, red pepper – as well as nuts, herbs and green olives.`
},
{
id:5,
title:"Gluten-free spaghetti Bolognese",
image:"images/BOLOGNAISE.jpg",
category:"Dinner",
price:160,
des:`There's no need to miss out on your favourite dishes if you don't or can't eat gluten. Some argue about what a classic Bolognese is, but we
think this one is spot on. The sundried tomatoes add a lovely sweetness and using fresh basil and parsley elevates it.`
},
{
id:6,
title:"Baked eggs and beans recipe",
image:"images/Baked-eggs-and-beans.jpg",
category:"Breakfast",
price:78,
des:`For an easy one-pan vegetarian breakfast or dinner, try this speedy baked eggs and bean recipe, using budget-friendly baked beans and colourful peppers.
This spin on shakshuka is ready in just 30 minutes, making it great for busy weeknights. It's dairy- and gluten-free and, what's more, it's all ready in one pan, so you can save on the washing up, too!`
},
{
id:7,
title:"Grapefruit, banana and mango smoothie",
image:"images/shake.jpg",
category:"Dessert",
price:89,
des:`Start the day with this zingy and fruity fresh smoothie - perfect for breakfast-on-the-go or a midday snack`
},
{
id:8,
title:"Green scrambled eggs with roasted tomatoes recipe",
image:"images/Green-scrambled-eggs-with-roasted-tomatoes.jpg",
category:"Breakfast",
price:123,
des:`For an easy veggie breakfast that's ready in just 15 mins, try this green scrambled eggs recipe. Stir through spinach and serve on toasted sourdough with roasted tomatoes – it's that simple!`
}];
const section = document.querySelector(".section");
const btn = document.querySelector(".btn");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displaybuttons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {


    return `
         <article class="section-item">
          <img src=${item.image} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price"><i class="fa fa-rupee"></i>${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.des}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");


  section.innerHTML = displayMenu;
}
function displaybuttons(){
let displaybuttons = menu.reduce(function(value,item){
  if(!value.includes(item.category))
  {
    value.push(item.category);
  }
return value;
},["all"]);
//console.log(displaybuttons);
let buttonmap =displaybuttons.map(function(item){
  return `<button class="finaldisplaybuttons" data-id=${item}>${item}</button>`;
});
btn.innerHTML=buttonmap.join("");

var finaldisplaybuttons=btn.querySelectorAll(".finaldisplaybuttons");
//console.log(finaldisplaybuttons);
finaldisplaybuttons.forEach(function(item){
  item.addEventListener('click',function(e){
    let category = e.currentTarget.dataset.id;
    console.log(category);
    var filtermenu =menu.filter(function(menuitem){
      if(menuitem.category===category ){
        return menuitem;
      }
    });
  if(category==="all")
  {
    displayMenuItems(menu);
  }
  else
  {
    displayMenuItems(filtermenu);
  }
  });
});
}
