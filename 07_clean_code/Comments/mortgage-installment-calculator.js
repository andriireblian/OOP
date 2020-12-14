const InvalidInputException = require('./lib/InvalidInputException');

exports.calculateMonthlyPayment = function (amount, termInYears, rate) {
    //cannot have negative loanAmount, term duration and rate of interest
    // TODO I do not know what is better place for initial check
    if (amount < 0 || termInYears <= 0 || rate < 0) {
        throw new InvalidInputException('Negative values are not allowed');
    }

    const rateInDecimal = rate / 100;
    const termInMonth = termInYears * 12;
    const monthlyRate = rateInDecimal / 12;

    if (rateInDecimal === 0) {
        return amount / termInMonth;
    } else {
        return calculateMonthlyPayment(amount, monthlyRate, termInMonth);
    }
}

// utils
const calculateMonthlyPayment = (amount, monthlyRate, termInMonth) => {
    return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termInMonth));
};
