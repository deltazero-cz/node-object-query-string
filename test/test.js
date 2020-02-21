"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../index");
// @ts-ignore
const tests = require("./tests.json");
for (const item of tests) {
    const [parameters, shouldEqual] = item;
    const value = index_1.queryString(parameters);
    describe(JSON.stringify(parameters), () => {
        it(value, () => {
            const result = index_1.queryString(parameters);
            chai_1.expect(result).to.equal(shouldEqual);
        });
    });
}
//# sourceMappingURL=test.js.map