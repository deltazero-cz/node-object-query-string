import {expect} from 'chai';
import {queryString} from "../index";
// @ts-ignore

const tests = require(`${process.cwd()}/test/tests.json`);

for (const item of tests) {
  const [parameters, shouldEqual] = item;
  const value = queryString(parameters);

  describe(JSON.stringify(parameters), () => {
    it(value, () => {
      const result = queryString(parameters);
      expect(result).to.equal(shouldEqual);
    });
  });
}
