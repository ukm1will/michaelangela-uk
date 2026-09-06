import StringBuilder from "./stringBuilder";

function arrayPrint(arr) {
    let sb = new StringBuilder();
    arr.map(r => {
        sb.append(sb.format('{0} {1} {2} {3} {4} {5} {6} {7} {8} {9}\n',
            r.ranking.toString().padEnd(5),
            r.player_one.padEnd(25), r.player_two.padEnd(25),
            r.g1s.toString().padEnd(5),
            r.g2s.toString().padEnd(5),
            r.g3s.toString().padEnd(5),
            r.g4s.toString().padEnd(5),
            r.g5s.toString().padEnd(5),
            r.g6s.toString().padEnd(5),
            r.total.toString().padEnd(5)
        ));
    })
    console.log(sb.toString());
}

export default arrayPrint