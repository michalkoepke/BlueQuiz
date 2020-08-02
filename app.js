const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();


    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // sprawdzanie odpowiedzi

    userAnswers.forEach((answer, index) => {

        if(answer === correctAnswers[index]){
            score += 25;
        }


    });

  
    scrollTo(0,0);


    const result = document.querySelector('.result');
    result.classList.remove('d-none');


    let userScore = document.querySelector('span')
    

    let output = 0;
    const timer = setInterval(() => {
        userScore.innerHTML = `${output}%`;

        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }


        
    }, 20);


});


