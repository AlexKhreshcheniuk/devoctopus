function includeHTML() {
  let i;
  let element;
  let file;
  let xhttp;

  /* Loop through a collection of all HTML elements: */
  const z = document.getElementsByTagName('*');
  for (i = 0; i < z.length; i += 1) {
    element = z[i];
    /* search for elements with a certain attribute: */
    file = element.getAttribute('do-include-html');
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      // eslint-disable-next-line no-loop-func
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) { element.innerHTML = this.responseText; }
          if (this.status === 404) { element.innerHTML = 'Page not found.'; }
          /* Remove the attribute, and call this function once more: */
          element.removeAttribute('do-include-html');
          includeHTML();
        }
      };
      xhttp.open('GET', file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

includeHTML();
