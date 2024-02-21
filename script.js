let button = document.querySelector('button');
button.addEventListener('click',display);

let inputdiv = document.createElement('div');
inputdiv.id = "result";
document.getElementById("wrapper").appendChild(inputdiv);

function display(){
    let input = document.getElementById('input');
    let city = input.options[input.selectedIndex].value;
    let population=0 , literacyRate = 0 , language = '';
    console.log(city);
    switch(city){
        case "chennai": 
        population = 4646732;
        literacyRate = 90.20;
        language = 'Tamil';
        break;

        case 'mumbai':
            population = 12442373
            literacyRate = 89.73
            language = 'Marathi';
            break;

        case 'bangalore':
            population = 8443675;
            literacyRate = 88.71;
            language = 'Kannada';
            break;
    }

    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}.`
   
    document.getElementById('result').innerHTML = text;


}
