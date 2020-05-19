const readline = require('readline');
const { Console } = require('console');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(income, deductAmount, percent) {
    console.log(((income - deductAmount) * percent) / 100);

    return ((income - deductAmount) * percent) / 100;

}

var name = "";
var age = 0;
var gender = 0;
var income = 0;

rl.question('What is your name? ', (answer) => {
    name = answer;
    rl.question(`Hi ${name}, How old are you? `, (answer) => {
        age = answer;
        rl.question('Your gender? For male press 0 and female press 1: ', (answer) => {
            gender = answer;
            rl.question(`Last question ${gender > 0 ? 'Miss.' : 'Mr.'} ${name}, what is your current income per year? `, (answer) => {
                // switch(answer){
                //     case answer<=250000 : console.log(answer);
                //     case answer>250000 && answer <= 500000 : console.log(calculate(answer,5));
                //     case answer>500000 && answer <= 750000 : console.log(calculate(answer,10));
                //     case answer>750000 && answer <= 1000000 : console.log(calculate(answer,15));

                // }

                income = answer;

                var totalPayableTax = 0;
                if (age <= 60) {
                    if (income > 250000) {
                        if (income < 500000) totalPayableTax = totalPayableTax + calculate(income, 250000, 5);
                        else totalPayableTax = totalPayableTax + calculate(500000, 250000, 5);

                        if (answer > 500000) {
                            if (income < 750000) totalPayableTax = totalPayableTax + calculate(income, 500000, 10);
                            else totalPayableTax = totalPayableTax + calculate(750000, 500000, 10);

                            if (answer > 750000) {
                                if (income < 1000000) totalPayableTax = totalPayableTax + calculate(income, 750000, 15);
                                else totalPayableTax = totalPayableTax + calculate(1000000, 750000, 15);

                                if (answer > 1000000) {
                                    if (income < 1250000) totalPayableTax = totalPayableTax + calculate(income, 1000000, 20);
                                    else totalPayableTax = totalPayableTax + calculate(1250000, 1000000, 20);


                                    if (answer > 1250000) {
                                        if (income < 1500000) totalPayableTax = totalPayableTax + calculate(income, 1250000, 25);
                                        else totalPayableTax = totalPayableTax + calculate(1500000, 1250000, 25);

                                        if (answer > 1500000) {
                                            totalPayableTax = totalPayableTax + calculate(income, 1500000, 30);
                                        }
                                    }
                                }
                            }
                        }
                    }

                } else if (age > 60 && age <= 80) {

                    if (income > 300000) {
                        if (income < 500000) totalPayableTax = totalPayableTax + calculate(income, 300000, 5);
                        else totalPayableTax = totalPayableTax + calculate(500000, 300000, 5);

                        if (answer > 500000) {
                            if (income < 1000000) totalPayableTax = totalPayableTax + calculate(income, 500000, 20);
                            else totalPayableTax = totalPayableTax + calculate(1000000, 500000, 20);

                            if (answer > 1000000) {
                                totalPayableTax = totalPayableTax + calculate(income, 1000000, 30);
                            }
                        }
                    }
                } else if (age > 80) {
                    if (income > 500000) {
                        if (income < 1000000) totalPayableTax = totalPayableTax + calculate(income, 500000, 20);
                        else totalPayableTax = totalPayableTax + calculate(1000000, 500000, 20);

                        if (answer > 1000000) {
                            totalPayableTax = totalPayableTax + calculate(1000000, 500000, 30);
                        }
                    }
                }

                console.log(`You need to pay tax Rs.${totalPayableTax}`);
                rl.close();

            })
        })
    });
});
