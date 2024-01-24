const container = document.querySelector('#fizz')

const numberFizz = Number(container.getAttribute('fizzNumber'))
const templateFizz = document.querySelector('#template-fizz')
const clone = templateFizz.content.cloneNode(true)
let card = clone.querySelector('.card-item')
let span = clone.querySelector('span')


class FizzBuzz {


    gridFizzBuilder = () => {

        for (let i = 0; i < numberFizz; i++) {
            card.id = i
            card.classList.add('active')
            span.textContent = i
            container.appendChild(card.cloneNode(true))
        }
        this.getVerificationSelected()
    }

    getVerificationSelected = () => {
        const cardItem = document.querySelectorAll('.card-item')
        cardItem.forEach((element) => {
            element.addEventListener('click', (e) => {
                if (!['Fizz', 'Buzz', 'FizzBuzz'].includes(e.target.querySelector('span').textContent)) {
                    element.classList.toggle('active')
                    element.classList.toggle('inactive')
                }

                const valueText = e.target.querySelector('span').textContent
                console.log(valueText)
                e.target.querySelector('span').textContent = this.checkTheMultipleOfTheNumber(valueText)

            })
        })
    }

    checkTheMultipleOfTheNumber = (value) => {
        return value % 15 === 0 ? 'FizzBuzz' : value % 5 === 0 ? 'Buzz' : value % 3 === 0 ? 'Fizz' : value
    }


}

const Fizz = new FizzBuzz()
Fizz.gridFizzBuilder()