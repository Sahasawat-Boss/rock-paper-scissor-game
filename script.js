// Get to DOM elements
const gameContainer = document.querySelector('.container'),
userResult = document.querySelector('.user_result img'),
botResult = document.querySelector('.bot_result img'),
result = document.querySelector('.result'),
optionImages = document.querySelectorAll('.option_image')

// console.log(gameContainer,userResult,botResult,result,optionImages)
optionImages.forEach((image, index) => {
    image.addEventListener("click", () =>{
        image.classList.add("active");

        // Loop through each option image again
        optionImages.forEach((image2, index2) => {
            // console.log(index,index2)
            
            //If the current index doesn't match the clicked index
            // Remove the "active" class from the other option images
        })
        
    });
});