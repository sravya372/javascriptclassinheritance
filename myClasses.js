class Food {
    constructor(name,protein){
        this._name = name;
        this._protein = protein;
        this._level = 30;
    }
    get name() {
        return this._name;
    }

    get protein() {
        return this._protein
    }
   

    incrementProtein() {
        this._protein++;
    }

    energy(value){
        this._level += value;
        console.log(`your energy increased after eating food ${this._level}`)
    }

}

var proteinfood = new Food("egg", 34);
console.log(proteinfood.name);
console.log(proteinfood.protein);
proteinfood.incrementProtein();
console.log(proteinfood.protein);
proteinfood.energy(20);


class cooking extends Food {
    constructor(name,protein,dishname){
        super(name,protein);
        this._dishname = dishname;
    }

    get dishname() {
        return this._dishname;
    }
}

var recipie = new cooking("eggs", 45,"omlet");
console.log(recipie.name);
console.log(recipie.protein);
console.log(recipie.dishname);
recipie.incrementProtein();
recipie.energy(34);
