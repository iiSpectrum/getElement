function getElement(Method, Val) {
  switch (Method) {
    case (Method == "id"):
      return document.getElementById(Val);
      break;
    case (Method == "class"):
      return document.getElementsByClassName(Val);
      break;
    case (Method == "tagname"):
      return document.getElementsByTagName(Val);
      break;
    case (Method == "name"):
      return document.getElementsByName(Val);

  }
}
