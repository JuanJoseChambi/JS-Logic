var selectorTypeMatcher = function (selector) {
    // tu código aquí
    if(selector.startsWith("#"))return "id";
    if(selector.startsWith("."))return "class";
    if(selector.includes("."))return "tag.class";
    if(!selector.includes("#","."))return "tag";
  };
  console.log(selectorTypeMatcher(".jose"));
  // NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
    var selectorType = selectorTypeMatcher(selector);
    var matchFunction;
    if (selectorType === "id") {
      matchFunction = true
    } else if (selectorType === "class") {
      matchFunction = true;
    } else if (selectorType === "tag.class") {
      matchFunction = true;
    } else if (selectorType === "tag") {
      matchFunction = true;
    }else{
      return false
    }
    return matchFunction;
  };

  console.log(matchFunctionMaker("juan"));

