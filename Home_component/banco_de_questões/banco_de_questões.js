

const date = new Date().getHours()
console.log(date)

let time_str = ''

if ( date >= 5 && date < 12 ) {
    time_str = 'bom dia'
}
else if (date >= 12 && date < 18 ) {
    time_str = "boa tarde"
}
else {
    time_str = "boa noite"
}


let disciplinas = [

    {id: 1, nome: 'Mátematica'},
    {id: 2, nome: 'Físca'},
    {id: 3, nome: 'Filosofia'},
    {id: 4, nome: 'História'},
    {id: 5, nome: 'Língua Portuguesa'}


]





