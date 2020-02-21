interface Options {
  separator: string,
  encode(string): string,
  encodeBrackets: boolean,
}

const buildQuery = (input : any, prefix : string|null|undefined, opts : Options) => {
  prefix = prefix ?? '';
  const _ = opts.encode;
  let arr = [];

  switch (typeof input) {
    case "object":
      for (const i in input) {
        if (typeof input[i] === "object")
          arr.push(buildQuery(input[i], prefix ? `${prefix}[${i}]` : i, opts));
        else
          if (Array.isArray(input))
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

export default (object : object|string|number|bigint, options ?: object) : string|undefined => {
  if (["object", "string", "number", "bigint"].indexOf(typeof object) < 0)
    return undefined;

  let opts : Options = Object.assign({
    separator: '&',
    encode: encodeURIComponent,
    encodeBrackets: false,
  }, options || {});

  return opts.encodeBrackets
      ? opts.encode(buildQuery(object, null, opts))
      : buildQuery(object, null, opts);
}
