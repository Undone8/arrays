const alunos =[
    {nome: "Ana Paula", idade: 15, sexo: "feminino"},
    {nome: "Carlos", idade: 17, sexo: "masculino"},
    {nome: "Cristiano", idade: 14, sexo: "masculino"},
    {nome: "Aline idade", idade: 13, sexo: "feminino"},
    {nome: "Pedro",idade: 15, sexo: "masculino"},
    {nome: "sofia", idade: 12, sexo: "feminino"},
    {nome: "paloma", idade: 16, sexo: "feminino"}
]

console.table(alunos.filter(function (a) {
    if(a.idade >=15 && a.idade <=17)
    return a
}))

