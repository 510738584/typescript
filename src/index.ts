enum Color {
    heart= '红桃',
    spade='黑桃',
    club='梅花',
    diamond='方片'
}

enum Mark {
    one='A',
    two='2',
    three= '3',
    four='4',
    five='5',
    six='6',
    seven='7',
    eight='8',
    nine='9',
    ten='10',
    eleven='J',
    twelev='Q',
    king='K',
}

type Deck = NormalCard[]
type NormalCard = {
    color:Color
    mark:Mark
}
function createCard(): Deck {
    let cards: Deck = [];
    let marks = Object.values(Mark);
    let colors = Object.values(Color);
    for(let m of marks){
        for(let c of colors) {
            cards.push({
                color: c,
                mark: m,
            });
        }
    }
    return cards;
}

function print(cards: Deck) {
    let result = '\n';
    cards.forEach((item, i) => {
        let str = item.color + item.mark;
        result += str + '\t';
        if((i + 1)% 4 === 0) {
            result += '\n'
        }
    });
    console.log(result);
}

const cards = createCard();
print(cards);