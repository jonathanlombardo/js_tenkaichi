/**
 * Get an int beetween min and max (included)
 *
 * @param {Int} min Minimum value
 * @param {Int} max Maximum value
 * @returns {Int} Return a value beetween min and max (included)
 */
function getRnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Log arrays in collapsed logs
 *
 * @param {String} label The label of the logs.
 * @param  {...any} obj Objects have one prop. Prop named as label of log and obj.prop as Array.
 */
function prettyLog(label, ...obj) {
  console.groupCollapsed(label);
  obj.forEach((obj) => {
    const prop = Object.keys(obj)[0];
    console.groupCollapsed(prop);
    console.table(obj[prop]);
    console.groupEnd();
  });
  console.groupEnd();
}
