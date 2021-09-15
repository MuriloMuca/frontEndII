const main = document.querySelector('main')

// Membro 1
{   
    // DIV Col
    const divCol = document.createElement("div")
    divCol.setAttribute('class', 'col')

    // DIV Card
    const divCard = document.createElement("div")
    divCard.setAttribute('class', 'card h-100')

    divCol.appendChild(divCard)

    // DIV Img
    const divImg = document.createElement("div")

    divCard.appendChild(divImg)

    // IMG element
    const img = document.createElement('img')
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('src', 'imgs/batman.png')

    divImg.appendChild(img)

    // DIV NOME
    const divNome = document.createElement("div")

    divCard.appendChild(divNome)

    // DIV h4
    const h4 = document.createElement('h4')
    h4.innerHTML = "Leonardo Santino"

    divNome.appendChild(h4)

    // Div Descrição
    const divDesc = document.createElement("div")

    divCard.appendChild(divDesc)

    // P element
    const p = document.createElement('p')
    p.innerHTML = 'Estudante do curso Certified Tech Developer'

    divDesc.appendChild(p)

    // main append divCol
    main.appendChild(divCol)
}
// Membro 2
{
    const divCol = document.createElement("div")
    divCol.setAttribute('class', 'col')

    // DIV Card
    const divCard = document.createElement("div")
    divCard.setAttribute('class', 'card h-100')

    divCol.appendChild(divCard)

    // DIV Img
    const divImg = document.createElement("div")

    divCard.appendChild(divImg)

    const img = document.createElement('img')
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('src', 'imgs/deadpool.png')

    divImg.appendChild(img)

    // DIV NOME
    const divNome = document.createElement("div")

    divCard.appendChild(divNome)

    // DIV h4
    const h4 = document.createElement('h4')
    h4.innerHTML = "Eduardo Marcondes"

    divNome.appendChild(h4)

    // Div Descrição
    const divDesc = document.createElement("div")

    divCard.appendChild(divDesc)

    const p = document.createElement('p')
    p.innerHTML = 'Estudante do curso Certified Tech Developer'

    divDesc.appendChild(p)

    main.appendChild(divCol)
}
// Membro 3
{
    const divCol = document.createElement("div")
    divCol.setAttribute('class', 'col')

    // DIV Card
    const divCard = document.createElement("div")
    divCard.setAttribute('class', 'card h-100')

    divCol.appendChild(divCard)

    // DIV Img
    const divImg = document.createElement("div")

    divCard.appendChild(divImg)

    const img = document.createElement('img')
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('src', 'imgs/superman.png')

    divImg.appendChild(img)

    // DIV NOME
    const divNome = document.createElement("div")

    divCard.appendChild(divNome)

    // DIV h4
    const h4 = document.createElement('h4')
    h4.innerHTML = "Murilo Muca"

    divNome.appendChild(h4)

    // Div Descrição
    const divDesc = document.createElement("div")

    divCard.appendChild(divDesc)

    const p = document.createElement('p')
    p.innerHTML = 'Estudante do curso Certified Tech Developer'

    divDesc.appendChild(p)

    main.appendChild(divCol)
}
// Membro 4
{
    const divCol = document.createElement("div")
    divCol.setAttribute('class', 'col')

    // DIV Card
    const divCard = document.createElement("div")
    divCard.setAttribute('class', 'card h-100')

    divCol.appendChild(divCard)

    // DIV Img
    const divImg = document.createElement("div")

    divCard.appendChild(divImg)

    const img = document.createElement('img')
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('src', 'imgs/spiderman.png')

    divImg.appendChild(img)

    // DIV NOME
    const divNome = document.createElement("div")

    divCard.appendChild(divNome)

    // DIV h4
    const h4 = document.createElement('h4')
    h4.innerHTML = "Felipe Reusch"

    divNome.appendChild(h4)

    // Div Descrição
    const divDesc = document.createElement("div")

    divCard.appendChild(divDesc)

    const p = document.createElement('p')
    p.innerHTML = 'Estudante do curso Certified Tech Developer'

    divDesc.appendChild(p)

    main.appendChild(divCol)
}