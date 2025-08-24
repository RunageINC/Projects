function toCamelCase(str: any) {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

export function keysToCamel(obj: any) {
  if (Array.isArray(obj)) {
    return obj.map(keysToCamel);
  } else if (obj !== null && obj.constructor === Object) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[toCamelCase(key)] = keysToCamel(value);
      return acc;
    }, {});
  }
  return obj;
}
