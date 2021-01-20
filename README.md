# CodingQuiz

* The motivation for this project was to create a quiz game that implements penalties and records score.

# How to play:

* All you have to do is click start and answer the following 4 questions (reset button resets the game and timer).
* If you answer incorrectly, an icrement of time will be subtracted from your total time
as well as a point deduction.  
* Once you've answered all questions BE SURE to push submit or the quiz will not end until the timer runs out.
* If the timer reaches zero, the game will end and your score will be recorded into local storage. 
* Once all the questions are answered and the submit button is pressed, you will be presented with a prompt to enter your initals and
your final score will be recorded into local storage. 
* Highest possible score as of now is 4 points. 
 
# Current Bug

* If you click outside of the answer choices a point will be dedudcted from the score.  This is because the event listener
is wired for the container and not the individual buttons.  Currently working on fix. 

![Getting Started](./assets/imgs/cqss.png)