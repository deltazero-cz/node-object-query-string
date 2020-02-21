import { queryString } from './index';

const tests : Array<Array<any>> = [
  [
    {
      "first": "one",
      "second": "two",
    },
    "first=one&second=two"
  ],
  [
    {
      filter: {
        brands: ["Audi"],
        models: ["A4", "A6", "A8"],
        accidentFree: true
      },
      sort: 'mileage'
    },
    "filter[brands][]=Audi&filter[models][]=A4&filter[models][]=A6&filter[models][]=A8&filter[accidentFree]=true&sort=mileage"
  ],
  [
    {
      "sort": [
        "value1",
        "value2",
        "value3",
        true
      ],
    },
    "sort[]=value1&sort[]=value2&sort[]=value3&sort[]=true"
  ],
  [
    {
      "filter": {
        "name": "David",
        "website": "deltazero.cz"
      },
    },
    "filter[name]=David&filter[website]=deltazero.cz"
  ],
  [
    {
      "stupidFilter": {
        "key1": {
          "subkey1": "value1",
          "subkey2": "value2",
        },
        "key2": ["value3", "value4", true, false, {
          "key2.0": "2.0",
          "key2.1": "2.1",
        }],
      },
    },
    "stupidFilter[key1][subkey1]=value1&stupidFilter[key1][subkey2]=value2&stupidFilter[key2][]=value3&stupidFilter[key2][]=value4&stupidFilter[key2][]=true&stupidFilter[key2][]=false&stupidFilter[key2][4][key2.0]=2.0&stupidFilter[key2][4][key2.1]=2.1"
  ],
  [
    "HOVNO",
    "HOVNO"
  ],
  [
    [1, 2, 3, true],
    "1&2&3&true",
  ]
];

console.log(
    `Check if set tests (${tests.length}) pass set expectations`,
    '\n[ok?]', '\t', '[query]'
);

for (const item of tests) {
  const [object, shouldEqual] = item;
  const value = queryString(object);

  console.log(shouldEqual === value, '\t', value);
}
