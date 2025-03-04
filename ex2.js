let etudiant1={
        nom:"moussa",
        prenom:"mohand",
        age:20,
        cne:"S138231441",
        etudier:function(){}
};
let etudiant2={
        nom:"assuom",
        prenom:"dnahom",
        age:21,
        cne:"S138213441",
        etudier:function(){}
};
let professeur1={
    nom:"hassan",
    age:52,
    cin:"RB12345",
    enseigner:function(){}
};
let professeur2={
    nom:"nassah",
    age:25,
    cin:"RB13245",
    enseigner:function(){}
};
let listetu=[etudiant1,etudiant2];
listetu.sort(function(a,b){
    let r=a.nom.localeCompare(b.nom);
    if(r==0){
        return a.prenom.localeCompare(b.prenom);
    }
    return r;
});
console.log(listetu);