class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    affichage() {
        console.log("x: "+this.x+" y= "+this.y);
        
    }
    add(v){
        return new Vecteur2D(this.x+v.x,this.y+v.y);
    }
}
const v1=new Vecteur2D();
const v2=new Vecteur2D(2,4);
const v3=new Vecteur2D(5,7);
const v4=v2.add(v3);
v2.affichage();
v3.affichage();
v4.affichage();


class Rectangle{
    nom="rectangle";
    constructor(longueur=0,largeur=0){
        this.longueur=longueur;
        this.largeur=largeur;
    }
    affichage(){
        console.log(this.nom+": longueur est "+this.longueur+" largeur est "+ this.largeur);
    }
    surface(){
        console.log("surface: "+this.longueur*this.largeur);
    }
}

class carre extends Rectangle {
    nom="carré";
    constructor(longueur=0,largeur=0){
        super(longueur,largeur);
    }
}
const R=new Rectangle(3,7);
const C=new carre(5,2);
R.affichage();
C.affichage();

class point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

class Segment{
    constructor(x1,x2,y1,y2){
        this.orig=new point(x1,y1);
        this.extrem=new point(x2,y2);
    }

}