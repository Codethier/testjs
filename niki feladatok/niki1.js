function
// myFunction() {
//     let element = document.getElementsByTagName("P");
//     document.getElementsByTagName("P")[0].innerHTML = element[0].innerHTML.replaceAll(/1|3|2/gi, "0");
//     document.getElementsByTagName("P")[1].innerHTML = element[1].innerHTML.replaceAll(/1|3|2/gi, "0");
// }
myFunction() {
    let elements = document.getElementsByTagName("P");
    for (i=elements.length-1; i>-1; i--)
        document.getElementsByTagName("P")[i].innerHTML = elements[i].innerHTML.replaceAll(/1|3|2/gi, "0");
}



myFunction()
