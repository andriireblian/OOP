module.exports = class UserReportController {
    constructor() {
        this.userReportBuilder = null;
    }

    getUserTotalOrderAmountView(userId, model) {
        const totalMessage = this.getUserTotalMessage(userId);
        // TODO

        if (totalMessage === 'technicalError') return 'technicalError';

        model.addAttribute('userTotalMessage', totalMessage);
        return 'userTotal';
    }

    getUserTotalMessage(userId) {
        try {
            const amount = this.userReportBuilder.getUserTotalOrderAmount(userId);

            return `User Total: ${amount}$`;
        } catch ({message}) {
            return message;
        }
    }

    getUserReportBuilder() {
        return this.userReportBuilder;
    }

    setUserReportBuilder(userReportBuilder) {
        this.userReportBuilder = userReportBuilder;
    }
}
