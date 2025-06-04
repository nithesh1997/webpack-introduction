import sum from './sum'


document.getElementById('btn').addEventListener('click',()=>{
    let sumValue = sum(5,3)

    document.getElementById('text-result').innerHTML = `Sum Values 5 + 3 = ${sumValue}`
})