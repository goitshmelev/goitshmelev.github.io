$(() => {
    const testObj = {
        name: 'Тест по программированию!',
        elementBody: document.body,
        elementWrapper: document.createElement('div'),
        elementScript: document.createElement('script'),
        elementTitle: document.createElement('h2'),
        elementForm: document.createElement('form'),
        elementList: document.createElement('ol'),
        elementText: document.createElement ('p'),
        elementButton: document.createElement('input'),

        preloadForm() {
            this.elementWrapper.classList.add('wrapper');
            this.elementTitle.classList.add('h2');
            this.elementTitle.classList.add('text-center');
            this.elementTitle.classList.add('wrapper--header');
            this.elementForm.classList.add('test');
            this.elementForm.classList.add('wrapper--form');
            this.elementList.classList.add('list-questions');
            this.elementButton.classList.add('wrapper--button');
            this.elementButton.classList.add('btn');
            this.elementButton.classList.add('btn-success');
            this.elementText.classList.add('text-center');

            this.elementScript.setAttribute('type','text/template');
            this.elementForm.setAttribute('action','action.php');
            this.elementForm.setAttribute('method','POST');
            this.elementButton.setAttribute('id','button');
            this.elementButton.setAttribute('type','button');
            this.elementButton.setAttribute('data-toggle','modal');
            this.elementButton.setAttribute('data-target','.bs-example-modal-sm');
            this.elementButton.setAttribute('value','Проверить мои результаты');

            this.elementScript.id = 'templating';
            this.elementTitle.innerHTML = this.name;

            this.elementBody.appendChild(this.elementWrapper);
            this.elementWrapper.appendChild(this.elementScript);
            this.elementScript.appendChild(this.elementTitle);
            this.elementScript.appendChild(this.elementForm);
            this.elementForm.appendChild(this.elementList);
            this.elementForm.appendChild(this.elementText);
            this.elementText.appendChild(this.elementButton);
        },

        createQuestion() {
            let questions = 3;
            let answers = 3;
            let numberQuestion = 1;
            let numberAnswer = 1;
            let arrayOfElements=[];
            let elementDiv;
            let elementLabel;
            let elementInput;

            for (let i = 0; i < questions; i++) {
                arrayOfElements[i] = document.createElement('li');
                arrayOfElements[i].classList.add(`question_${numberQuestion}`);
                arrayOfElements[i].innerHTML = `<b>#=question${numberQuestion}.question#</b>`;
                this.elementList.appendChild(arrayOfElements[i]);
                numberAnswer = 1;

                for (let j = 0; j < answers; j++){
                    elementDiv = document.createElement('div');
                    elementDiv.classList.add('radio');
                    arrayOfElements[i].appendChild(elementDiv);
                    elementLabel = document.createElement('label');
                    elementInput = document.createElement('input');
                    elementDiv.appendChild(elementLabel);
                    elementLabel.innerHTML = `#=question${numberQuestion}.answer${numberAnswer}#`;
                    elementInput.classList.add('input');
                    elementInput.setAttribute('type','radio');
                    elementInput.setAttribute('name',`question${numberQuestion}`);
                    elementInput.setAttribute('value',`answer${numberAnswer}`);
                    elementInput.setAttribute('id',`answer_${numberQuestion}${numberAnswer}`);
                    elementLabel.insertBefore(elementInput, elementLabel.childNodes[0]);
                    numberAnswer++;
                }

                numberQuestion++;
            }
        },
    };

    testObj.preloadForm();
    testObj.createQuestion();
});



