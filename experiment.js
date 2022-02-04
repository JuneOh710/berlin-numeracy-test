const jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.displayData();
    }
});

const block_1 = [];
const versionA = [];
const versionB = [];

// randomize order
const number = Math.round(Math.random());
const order = number ? [versionA, versionB] : [versionB, versionA];

const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>Welcome to the experiment! In this task, we will be testing you ability to estimate the numerical answers of several questions.
         Press any key to continue on to the instructions.</p>
    `
}
block_1.push(welcome);

const instructions_1 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>In this task, you will be estimating the answers to 9 questions. You will see one question at a time and your job is to
        make a reasonable guess as to what the answer is.</p><p> Each question requires a numerical response in the units that are specified.
        Once you have come up with an estimate, please type the number into the textbox provided and click "continue" to move on to the 
        next question.</p><p>Once again, just a reminder that you are NOT expected to know the exact answer to these questions. We only ask that
        you make a reasonable guess or give your best estimate.</p><p>When you are ready to begin, press any key.</p>
    `
}
block_1.push(instructions_1);





const question1A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>Imagine we are throwing a five-sided die 50 times. On average, out of these 50 throws how many times would this five-sided die show an odd number (1, 3 or 5)?</p>
    <p></p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="5" required/>  out of 50 throws</p > ',
    autofocus: 'test-resp-box'
}
versionA.push(question1A);


const question2A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>Out of 1,000 people in a small town 500 are mem- bers of a choir. Out of these 500
members in the choir 100 are men. Out of the 500 inhabitants that are not in the choir 300 are men. What is the probability that a randomly drawn man is a member of the choir? (please indicate the probability in percent).</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="5" required/>  &#37;</p>',
    autofocus: 'test-resp-box'
}
versionA.push(question2A);


const question3A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>

        Imagine we are throwing a loaded die (6 sides). The probability that the die shows a 6 is twice as high as the probability of each of the other numbers. On average, out of these 70 throws, how many times would the die show the number 6?
        
        </p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="5" required/>  out of 70 throws.</p>',
    autofocus: 'test-resp-box'
}
versionA.push(question3A);


const question4A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>

        In a forest 20% of mushrooms are red, 50% brown and 30% white. A red mushroom is poisonous with a probability of 20%. A mushroom that is not red is poisonous with a probability of 5%. What is the probability that a poisonous mushroom in the forest is red?

        </p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="5" required/>  &#37; </p>',
    autofocus: 'test-resp-box'
}
versionA.push(question4A);




const timeline = block_1.concat(versionA);
jsPsych.run(timeline);