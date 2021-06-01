function transform(value: string): string {
    const asd = ["á", "Á", "é", "É", "í", "Í", "ó", "Ó", "ö", "Ö", "ő", "Ő", "ú", "Ú", "ü", "Ü", "ű", "Ű"];
    const asda = ["a", "A", "e", "E", "i", "I", "o", "O", "o", "O", "o", "O", "u", "U", "u", "U", "u", "U"];
    let p = value;

    for (const arr of asd) {
        const replace = asd.indexOf(arr);
        const regex = new RegExp(arr, "gi");
        const im = p.match(regex);
        if (im === null) {
        } else
            for (const app of im!) {
                p = p.replace(app, asda[replace]);
            }
    }
    return p;
}

console.log(transform("miáért"))
