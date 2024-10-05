let level

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
for (let i = 0; i < ranks.length; i++) {
    console.log(`Rank ${i + 1}: ${ranks[i]}`);
}
readline.question("Digite a quantidade de vitórias:", victoryAmount => {
    victoryAmount = parseInt(victoryAmount)


    readline.question("Digite a quantidade de derrota:", defeatAmount => {
        defeatAmount = parseInt(defeatAmount)

        function calculateBalance(victory, defeat) {
            victoryBalance = victory - defeat
            return victoryBalance
        }

        calculateBalance(victoryAmount, defeatAmount)

        if (victoryBalance <= 10) {
            level = "Ferro"
        } else if (victoryBalance <= 20) {
            level = "Bronze"
        } else if (victoryBalance <= 50) {
            level = "Prata"
        } else if (victoryBalance <= 80) {
            level = "Ouro"
        } else if (victoryBalance <= 90) {
            level = "Diamante"
        } else if (victoryBalance <= 100) {
            level = "Lendário"
        } else {
            level = "Imortal"
        }

        console.log(`O Herói tem de saldo de ${victoryBalance} está no nível de ${level}`)
        readline.close();
    })
})
