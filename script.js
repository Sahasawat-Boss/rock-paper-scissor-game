// Get to DOM elements
const gameContainer = document.querySelector('.container'),
    userResult = document.querySelector('.user_result img'),
    botResult = document.querySelector('.bot_result img'),
    result = document.querySelector('.result'),
    optionImages = document.querySelectorAll('.option_image')

// console.log(gameContainer,userResult,botResult,result,optionImages)
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        // Loop through each option image again
        optionImages.forEach((image2, index2) => {
            // console.log(index, index2)
            // If the current index doesn't match the clicked index
            // Remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");
        })

        // Get the source of the clicked option image
        // console.log(e.target);
        let imageSrc = e.currentTarget.querySelector("img").src;
        console.log(imageSrc);
        userResult.src = imageSrc;

        // Generate a random number between 0 and 2
        let randomNumber = Math.floor(Math.random() * 3);
        console.log(randomNumber);
        
        let botImage = ["images/paper.png", "images/rock.png", "images/scissors.png"];
        cpuResult.src = botImage[randomNumber];
    });
});