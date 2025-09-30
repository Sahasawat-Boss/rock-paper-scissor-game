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
        // console.log(randomNumber);

        let botImage = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        botResult.src = botImage[randomNumber];

        // Assign a letter value to the bot option (R for Rock, P for paper, S for Scissors)
        let botValue = ["R", "P", "S"][randomNumber];
        // Assign a letter value to the clicked oRtion (based on index)
        let userValue = ["R", "P", "S"][index];

        console.log(botValue, userValue)

        // Create an object with all possible outcomes
        const outcomes = {
            RR: "Draw",
            RP: "Bot",     // Paper ชนะ Rock
            RS: "User",    // Rock ชนะ Scissors
            PP: "Draw",
            PR: "User",    // Paper ชนะ Rock
            PS: "Bot",     // Scissors ชนะ Paper
            SS: "Draw",
            SR: "Bot",     // Rock ชนะ Scissors
            SP: "User",    // Scissors ชนะ Paper
        };

        // Look up the outcome value based on user and bot options
        let outComeValue = outcomes[userValue + botValue];

        // Display result
        result.textContent = userValue === botValue ? "Match Draw" : `${outComeValue} Won !!`
        console.log(outComeValue);

    });
});