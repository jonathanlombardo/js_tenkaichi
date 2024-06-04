/** Write a text with a delay in the innerHTML of an elemnt
 *
 * @param {String} text text to write
 * @param {Element} element where to write the text
 * @param {Number} delay milliseconds of delay
 */
function writingDelay(msg, element, delay) {
  text = genMsg(msg);
  for (let i = 0; i <= text.length; i++) {
    const newLine = text.substring(i, i + 5) == "<br/>";
    if (newLine) i = i + 4;
    msgClocks[i] = setTimeout(function () {
      if (newLine) {
        element.innerHTML += "<br/>";
      } else {
        i == text.length ? (msgClocks = []) : (element.innerHTML += text[i]);
      }
    }, i * delay);
  }
}

/**
 *
 * @param {String} text Text with param
 * @param {Object} prop Object for retrieving value
 * @returns Final text, params replaced
 */
function fillMsgProp(text, prop) {
  while (text.match(msgPropRegex)) {
    const toFind = text.match(msgPropRegex)[0];
    const replace = prop[text.match(msgPropRegex)[1]];
    text = text.replace(toFind, replace);
  }
  return text;
}

/**
 *
 * @param {Object} msg Message Object
 * @returns Return text message to display
 */
function genMsg(msg) {
  let prop;

  if (!msg.prop) {
    return msg.text;
  } else {
    prop = eval(msg.use);
  }

  if (!msg.cycle) {
    return fillMsgProp(msg.text, prop);
  } else {
    let text = "";
    prop.forEach((el) => {
      text += fillMsgProp(msg.text, el) + "<br/>";
    });
    return text;
  }
}
