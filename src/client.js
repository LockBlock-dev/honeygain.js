const axios = require("axios").default;
const errors = require("./errors");
const pkg = require("../package.json");

class Client {
    /**
     * The HoneyGain client
     * @example const client = new Client();
     */
    constructor() {
        /**
         * The base API URL
         * @type {string}
         */
        this.API_URL = "https://dashboard.honeygain.com/api";
    }

    /**
     * Authentication token
     * @type {string}
     * @private
     */
    #authorization = "";

    /**
     * Make request against the API
     * @private
     * @param {string} method HTTP method
     * @param  {string} path API endpoint
     * @param  {Object} [reqOptions] request options
     * @private
     * @returns {Promise<Object>} promise
     */
    #request(method, path, reqOptions = {}) {
        let options = {
            method,
            url: `${this.API_URL}/${path}`,
            headers: {
                "User-Agent": `honeygain.js ${pkg.version} (https://github.com/LockBlock-dev/honeygain.js)`,
                "Content-Type": "application/json",
                "Accept-Encoding": "UTF8",
                Authorization: this.#authorization,
            },
            ...reqOptions,
        };

        return axios(options)
            .then((response) => {
                if (typeof response.data === "object") {
                    return response.data;
                } else {
                    try {
                        return { status: response.data.toLowerCase() };
                    } catch (err) {
                        throw new errors.ParseError(
                            response.data,
                            response.status,
                            options.method,
                            options.url
                        );
                    }
                }
            })
            .catch((error) => {
                throw error.type === "ParseError"
                    ? error
                    : new errors.APIError(
                          error,
                          error.response,
                          error.response.status,
                          options.method,
                          options.url
                      );
            });
    }

    /**
     * Log into HoneyGain.
     * @param {string} authorization Authorization token
     * @example client.login("eyJ0eXAi...xaL5x4");
     * @returns {Promise<Object>}
     */
    async login(authorization) {
        this.#authorization = authorization;

        if (!this.#authorization.includes("Bearer"))
            this.#authorization = `Bearer ${this.#authorization}`;

        return { status: "ok" };
    }

    /**
     * Get your user data.
     * @example client.me();
     * @returns {Promise<Object>}
     */
    me() {
        return this.#request("GET", "v1/users/me");
    }

    /**
     * Get your tos status.
     * @example client.tos();
     * @returns {Promise<Object>}
     */
    tos() {
        return this.#request("GET", "v1/users/tos");
    }

    /**
     * Get user devices.
     * @example client.devices();
     * @returns {Promise<Object>}
     */
    devices() {
        return this.#request("GET", "v2/devices");
    }

    /**
     * Get user payouts.
     * @example client.payouts();
     * @returns {Promise<Object>}
     */
    payouts() {
        return this.#request("GET", "v1/payouts");
    }

    /**
     * Get user transactions.
     * @example client.transactions();
     * @returns {Promise<Object>}
     */
    transactions() {
        return this.#request("GET", "v1/transactions_history");
    }

    /**
     * Get user stats.
     * @example client.stats();
     * @returns {Promise<Object>}
     */
    stats() {
        return this.#request("GET", "v1/earnings/stats");
    }

    /**
     * Get user referrals.
     * @example client.referrals();
     * @returns {Promise<Object>}
     */
    referrals() {
        return this.#request("GET", "v1/referrals");
    }

    /**
     * Get user balances.
     * @example client.balances();
     * @returns {Promise<Object>}
     */
    balances() {
        return this.#request("GET", "v1/users/balances");
    }

    /**
     * Get user notifications.
     * @example client.notifications();
     * @returns {Promise<Object>}
     */
    async notifications() {
        const { data } = await this.me();
        return this.#request("GET", `v1/notifications?user_id=${data.id}`);
    }

    /**
     * Get referrals earnings.
     * @example client.referralsEarnings();
     * @returns {Promise<Object>}
     */
    referralsEarnings() {
        return this.#request("GET", "v1/referrals/earnings");
    }

    /**
     * Get user Jump Task earnings.
     * @example client.jumpTaskEarnings();
     * @returns {Promise<Object>}
     */
    jumpTaskEarnings() {
        return this.#request("GET", "v1/earnings/jt");
    }

    /**
     * Get user Jump Task stats.
     * @example client.jumpTaskStats();
     * @returns {Promise<Object>}
     */
    jumpTaskStats() {
        return this.#request("GET", "v1/jt-earnings/stats");
    }

    /**
     * Get user jumpTask earnings for the day.
     * @example client.today();
     * @returns {Promise<Object>}
     */
    jumpTaskToday() {
        return this.#request("GET", "v1/jt-earnings/today");
    }

    /**
     * Get user wallet stats.
     * @example client.walletStats();
     * @returns {Promise<Object>}
     */
    walletStats() {
        return this.#request("GET", "v1/earnings/wallet-stats");
    }

    /**
     * Get user earnings for the day.
     * @example client.today();
     * @returns {Promise<Object>}
     */
    today() {
        return this.#request("GET", "v1/earnings/today");
    }

    /**
     * Change user password.
     * @param {string} currentPassword your current HoneyGain password
     * @param {string} newPassword your new HoneyGain password
     * @example client.changePassword("myOldPass", "myNewPass");
     * @returns {Promise<Object>}
     */
    changePassword(currentPassword, newPassword) {
        return this.#request("PUT", "v1/users/passwords", {
            data: { current_password: currentPassword, new_password: newPassword },
        });
    }

    // /**
    //  * Redeem your balance.
    //  * @param {string} email paypal / amazon email
    //  * @param {string} method methods:
    //  * to see methods do client.paymentMethods()
    //  * @example client.redeem("mail@domain.com", "paypal.com");
    //  * @example client.redeem("mail@domain.com", "amazon.com (US/Global)");
    //  * @returns {Promise<Object>}
    //  */
    // redeem(email, method) {
    //     return this.#request("POST", "redeem", { data: { to: email, payment_method: method } });
    // }
}

module.exports = { Client };
