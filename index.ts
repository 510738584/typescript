// type Color = |'红桃'|'方片'|'梅花';
enum Color {
    heart = '红桃',
    spade = '黑桃',
    club = '梅花',
    diamond = '方片'
}
enum Mark {
    one = 'A',
    two = '2',
    three = '3',
    four = '4',
    five = '5',
    six = '6',
    seven = '7',
    eight = '8',
    nine = '9',
    ten = '10',
    eleven = 'J',
    twelve = 'Q',
    thirteen = 'K'
};
type NormalCard = {
    color: Color
    mark: string
};
type Deck = NormalCard[];

function createCard():Deck {
    let deck: Deck = [];
    let colors = Object.values(Color);
    let marks = Object.values(Mark);
    for (const c of colors) {
        for(const m of marks) {
            deck.push({
                color: c,
                mark: m,
            })
        }
    }
    return deck;
};
function printCards(deck: Deck) {
    let result = '\n';
    deck.forEach((item, i) => {
        let str = item.color + item.mark;
        result += str + '\t';
        if((i+1) % 4 === 0) {
            result += '\n'
        }
    })
    console.log(result);
}

let arr = createCard();
printCards(arr);