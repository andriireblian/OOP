const WrongAccountNameException = require('./lib/WrongAccountNameException');
const WrongPasswordException = require('./lib/WrongPasswordException');

module.exports = class RegisterAccountAction {
    constructor() {
        this.passwordChecker = null;
        this.accountManager = null;
    }

    register(account) {
        this.validateAccountName(account);
        this.validateAccountPassword(account);

        account.setCreatedDate(new Date());
        account.setAddresses(this.setAccountAddresses(account));
        this.accountManager.createNewAccount(account);
    }

    validateAccountName = ({name}) => {
        if (name.length <= 5) {
            throw new WrongAccountNameException(name);
        }
    }

    validateAccountPassword = ({password}) => {
        if (password.length <= 8) {
            if (this.passwordChecker.validate(password) !== this.passwordChecker.result.OK) {
                throw new WrongPasswordException();
            }
        }
    }

    setAccountAddresses = (account) => {
        const addresses = new Set();

        addresses.add(account.getHomeAddress());
        addresses.add(account.getWorkAddress());
        addresses.add(account.getAdditionalAddress());

        return addresses;
    }
};
