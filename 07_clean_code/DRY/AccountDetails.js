module.exports = class AccountDetails {

    constructor(birth, startDate, balance, age) {
        this.birth = birth;
        this.startDate = startDate;
        this.balance = balance;
        this.age = age;
    }

    getBirth() {
        return this.birth;
    }

    getStartDate() {
        return this.startDate;
    }

    getBalance() {
        return this.balance;
    }

    getAge() {
        return this.age;
    }
};
