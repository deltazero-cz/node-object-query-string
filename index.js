"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildQuery = (input, prefix, opts) => {
    prefix = (prefix !== null && prefix !== void 0 ? prefix : '');
    const _ = opts.encode;
    let arr = [];
    switch (typeof input) {
        case "object":
            for (const i in input) {
                if (typeof input[i] === "object")
                    arr.push(buildQuery(input[i], prefix ? `${prefix}[${i}]` : i, opts));
                else if (Array.isArray(input))
                    arr.push(prefix
                        ? `${prefix}[]=${_(input[i])}`
                        : _(input[i]));
                else
                    arr.push(prefix
                        ? `${prefix}[${i}]=${_(input[i])}`
                        : `${i}=${_(input[i])}`);
            }
            break;
        case "string":
            arr.push(_(input));
            break;
        case "number":
        case "bigint":
        case "boolean":
            arr.push(_(input.toString()));
            break;
    }
    return arr.join(opts.separator);
};
exports.default = (object, options) => {
    if (["object", "string", "number", "bigint"].indexOf(typeof object) < 0)
        return undefined;
    let opts = Object.assign({
        separator: '&',
        encode: encodeURIComponent,
        encodeBrackets: false,
    }, options || {});
    return opts.encodeBrackets
        ? opts.encode(buildQuery(object, null, opts))
        : buildQuery(object, null, opts);
};
//# sourceMappingURL=index.js.map