// const isimler = ['ahmet', 'arda', 'emre', 'fırat', 'gökhan', 'mehmet']
// console.log(isimler.sort()) // sort string ifadelerde normal bir şekilde çalışır.

// const sayilar = [1,2,3,4,5,6,7,8,9,10,22,45,87,61,94]
// console.log(sayilar.sort((a,b) => a-b)) // sort number ifadelerde sıralamak istersek bu şekilde yapmamız lazım büyükten küçüğe doğru sıralamak istersek de b-a yapmamız gerekir.


const container = document.querySelector('.container')
const btn = document.getElementById('button')
const totalPop = document.querySelector('.total-pop')


let sortedCountries = countries_data.sort((a,b) => b.population - a.population)

function calcWorldPopulation(){
    let total = 0
    sortedCountries.forEach(country => {
        total += country.population
    })
    return total
}

btn.addEventListener('click', function(){
    sortedCountries.forEach(country => {
        const div = document.createElement('div')
        const name = document.createElement('h2')
        const capital = document.createElement('h3')
        const flag = document.createElement('img')
        const population = document.createElement('p') 
        const percent_of_country = document.createElement('p')

        let percent = Number(((country.population / calcWorldPopulation()) * 100).toFixed(5))

        percent > 3 ? percent_of_country.style.color= 'red' : percent_of_country.style.color = 'green'


        name.textContent = country.name
        capital.textContent = country.capital
        flag.setAttribute('src', `${country.flag}`)
        population.textContent = `Ülke nüfusu: ${country.population}`
        percent_of_country.textContent = `${country.name} dünya nüfusuna oranı: ${percent}`

        div.style.border = '1px solid black'
        div.style.textAlign = 'center'
        div.style.width = '370px'
        div.style.height = '270px'
        div.style.marginBottom = '20px'
        name.style.marginTop = '50px'
        flag.style.width = '50px'

        div.appendChild(name)
        div.appendChild(capital)
        div.appendChild(flag)
        div.appendChild(population)
        div.appendChild(percent_of_country)

        totalPop.innerHTML = `Toplamda ${sortedCountries.length} ülke var ve toplam nüfus: ${calcWorldPopulation()}`

        container.appendChild(div)
    })
})