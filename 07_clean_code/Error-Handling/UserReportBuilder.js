const USER_NOT_PRESENT = 'technicalError';
const USER_ID_ERROR = 'WARNING: User ID doesn\'t exist.';
const USER_ORDER_ERROR = 'WARNING: User have no submitted orders.';
const ORDER_AMOUNT_ERROR = 'ERROR: Wrong order amount.';

module.exports = class UserReportBuilder {
    constructor() {
        this.userDao = null;
    }

    getUserTotalOrderAmount(userId) {
        this.initUserDao();
        const user = this.getUserId(userId);
        const orders = this.getUserOrders(user);

        return this.calculateUserOrderSum(orders);
    }

    initUserDao() {
        if (this.userDao === null) generateError(USER_NOT_PRESENT);
    }

    setUserDao(userDao) {
        this.userDao = userDao;
    }

    getUserId = (userId) => {
        const user = this.userDao.getUser(userId);

        if (user !== null) {
            return user;
        } else {
            generateError(USER_ID_ERROR);
        }
    }

    getUserOrders = (user) => {
        const orders = user.getAllOrders();

        if (orders.length) {
            return orders;
        } else {
            generateError(USER_ORDER_ERROR);
        }
    }

    calculateUserOrderSum = (orders) => {
        let sum = 0;

        for (let order of orders) {
            if (order.isSubmitted()) {
                const total = order.total();
                if (total >= 0) {
                    sum += total;
                } else {
                    generateError(ORDER_AMOUNT_ERROR);
                }
            }
        }

        return sum;
    }
}


const generateError = (message) => {
    // Some custom logic
    throw new Error(message);
};

