# Object Query String

Stringify objects as URL Query Strings.

A lightweight mock of jQuery.param function without any dependencies!

### Example

````javascript
// TypeScript
import { queryString } from './index';

// Node.js
const { queryString } = require("./index");

const query = queryString({
    filter: {
        brands: ["Audi"],
        models: ["A4", "A6", "A8"],
        accidentFree: true
    },
    sort: 'mileage'
});

````

returns

````
filter[brands][]=Audi&filter[models][]=A4&filter[models][]=A6&filter[models][]=A8&filter[accidentFree]=true&sort=milage
````

-----

Inspired by [jQuery](https://jquery.com)!