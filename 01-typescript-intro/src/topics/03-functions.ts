const addNumbers = (a: number, b: number): number => {
    return a+b
}

const result: number = addNumbers(1,2);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: "Strider",
    hp: 100,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }

}

healCharacter(strider, 50);

strider.showHp();