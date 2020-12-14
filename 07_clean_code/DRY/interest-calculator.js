const AGE = 60;
const INTEREST_PERCENT = 4.5;
const SENIOR_PERCENT = 5.5;
const BONUS_AGE = 13;
const ZERO_INTEREST = 0;

function durationBetweenDatesInYears(from, to) {
    const start = new Date(from);
    const end = new Date(to);

    return calculateDiffBetweenDates(start, end);
}


function durationSinceStartDateInYears(startDate) {
    const start = new Date(startDate);
    const end = new Date();

    return calculateDiffBetweenDates(start, end);
}

function isAccountStartedAfterBonusAge(accountDetails) {
    return durationBetweenDatesInYears(accountDetails.getBirth(), accountDetails.getStartDate()) > BONUS_AGE;
}

function calculateInterest(accountDetails) {
    if (isAccountStartedAfterBonusAge(accountDetails)) {
        return interest(accountDetails);
    } else {
        return ZERO_INTEREST;
    }
}

function interest(accountDetails) {
    if (AGE <= accountDetails.getAge()) {
        const balance = accountDetails.getBalance();
        const duration = durationSinceStartDateInYears(accountDetails.getStartDate());

        return calculateInterestHelper(balance, duration, SENIOR_PERCENT);
    } else {
        const balance = accountDetails.getBalance().doubleValue();
        const duration = durationSinceStartDateInYears(accountDetails.getStartDate());

        return calculateInterestHelper(balance, duration, INTEREST_PERCENT);
    }
}


module.exports = {
    calculateInterest,
};

// utils

const calculateDiffBetweenDates = (start, end) => {
    const diffYear = end.getFullYear() - start.getFullYear(),
          endNcurrentMonth = end.getMonth() === start.getMonth(),
          endDate = end.getDate() < start.getDate();

    if (end.getMonth() < start.getMonth() && endNcurrentMonth && endDate) {
        return diffYear - 1;
    }

    return diffYear;
}


const calculateInterestHelper = (principalAmount, durationInYears, annualInterestRate) => {
    return (principalAmount * durationInYears * annualInterestRate) / 100;
}
