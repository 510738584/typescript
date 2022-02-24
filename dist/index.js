var Color;
(function (Color) {
    Color["heart"] = "\u7EA2\u6843";
    Color["spade"] = "\u9ED1\u6843";
    Color["club"] = "\u6885\u82B1";
    Color["diamond"] = "\u65B9\u7247";
})(Color || (Color = {}));
var Mark;
(function (Mark) {
    Mark["one"] = "A";
    Mark["two"] = "2";
    Mark["three"] = "3";
    Mark["four"] = "4";
    Mark["five"] = "5";
    Mark["six"] = "6";
    Mark["seven"] = "7";
    Mark["eight"] = "8";
    Mark["nine"] = "9";
    Mark["ten"] = "10";
    Mark["eleven"] = "J";
    Mark["twelev"] = "Q";
    Mark["king"] = "K";
})(Mark || (Mark = {}));
function createCard() {
    let cards = [];
    let marks = Object.values(Mark);
    let colors = Object.values(Color);
    for (let m of marks) {
        for (let c of colors) {
            cards.push({
                color: c,
                mark: m,
            });
        }
    }
    return cards;
}
console.log(createCard());
