function transform(value) {
    var asd = ["á", "Á", "é", "É", "í", "Í", "ó", "Ó", "ö", "Ö", "ő", "Ő", "ú", "Ú", "ü", "Ü", "ű", "Ű"];
    var asda = ["a", "A", "e", "E", "i", "I", "o", "O", "o", "O", "o", "O", "u", "U", "u", "U", "u", "U"];
    var p = value;
    for (var _i = 0, asd_1 = asd; _i < asd_1.length; _i++) {
        var arr = asd_1[_i];
        var replace = asd.indexOf(arr);
        var regex = new RegExp(arr, "gi");
        var im = p.match(regex);
        if (im === null) {
        }
        else
            for (var _a = 0, _b = im; _a < _b.length; _a++) {
                var app = _b[_a];
                p = p.replace(app, asda[replace]);
            }
    }
    return p;
}
console.log(transform("miáért"));
//# sourceMappingURL=asd.js.map