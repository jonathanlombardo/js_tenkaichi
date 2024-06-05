/** Write a text with a delay in the innerHTML of an elemnt
 *
 * @param {String} text text to write
 * @param {Element} element where to write the text
 * @param {Number} delay milliseconds of delay
 */
function writingDelay(element, delay) {
  toggleTriangle();
  repeatMsg();
  const msg = messages[msgCounter];
  text = genMsg(msg);
  for (let i = 0; i <= text.length; i++) {
    const newLine = text.substring(i, i + 5) == "<br/>";
    if (newLine) i = i + 4;
    msgClocks[i] = setTimeout(function () {
      if (newLine) {
        element.innerHTML += "<br/>";
      } else {
        if (i == text.length) {
          toggleTriangle();
          msgClocks = [];
        } else {
          element.innerHTML += text[i];
        }
      }
      element.scrollTop = element.scrollHeight;
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
      text += fillMsgProp(msg.text, el) + "<br/><br/>";
    });
    return text;
  }
}

function repeatMsg() {
  const msg = messages[msgCounter];

  if (msg.propNasted) {
    console.log(messages);
    const prop = eval(msg.use);
    let counter = msgCounter + 1;

    prop.forEach((el, i) => {
      messages.splice(counter + i, 0, {
        ...msg,
        propNasted: false,
        headerNasted: false,
        use: `${msg.use}[${i}]`,
      });

      if (msg.headerNasted) {
        messages.splice(counter + i, 0, {
          ...msg,
          text: msg.headerNasted,
          prop: true,
          use: `${msg.use}[${i}][0]`,
          propNasted: false,
          headerNasted: false,
          cycle: false,
        });
      }

      counter++;
    });

    msgCounter++;

    console.log(messages);
  }
}
