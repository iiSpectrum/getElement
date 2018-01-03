function getElement(Method, Val) {
  switch (Method) {
    case "id":
      return document.getElementById(Val);
      break;
    case "class":
      return document.getElementsByClassName(Val);
      break;
    case "tagname":
      return document.getElementsByTagName(Val);
      break;
    case  "name":
      return document.getElementsByName(Val);

  }
}
