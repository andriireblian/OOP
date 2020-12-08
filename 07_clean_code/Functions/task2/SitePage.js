const HTTP = 'http://';
const EDITABLE = '/?edit=true';
const DOMAIN = 'mysite.com';

module.exports = class SitePage {
    constructor(siteGroup, userGroup) {
        this.siteGroup = siteGroup;
        this.userGroup = userGroup;
    }

    getEditablePageUrl(params) {
        const paramsString = this.getParamsString(params);
        const attributes = this.getAttributes();
        return HTTP + DOMAIN + EDITABLE + paramsString + attributes;
    }

    getAttributes() {
        return '&siteGrp=' + this.siteGroup + '&userGrp=' + this.userGroup;
    }

    getParamsString(params) {
        let paramsString = '';

        for (const [key, value] of params) {
            paramsString += '&' + key + '=' + value;
        }

        return paramsString;
    }
};
