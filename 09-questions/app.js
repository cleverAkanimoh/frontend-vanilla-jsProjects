//traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn)=>{
//     btn.onclick = (e) => {
//         let item = e.currentTarget.parentElement.parentElement;
//         item.classList.toggle('show-text')
//     }
// });

// using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach((ques) => {
    let btn = ques.querySelector('.question-btn');
    btn.onclick = () => {
        questions.forEach(item => {
            if (item !== ques) {
                item.classList.remove('show-text');
            }
        });
        
        ques.classList.toggle('show-text');
    }
});