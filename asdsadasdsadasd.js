var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?', let, arr1 = ["fox", "dog"];
var arr2 = ["monkey", "birka"];
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var notation = arr1_1[_i];
    var replacer = arr1.indexOf(notation);
    var regex = new RegExp(notation, "gi");
    var i = p.match(regex);
    console.log(i);
    for (var _a = 0, i_1 = i; _a < i_1.length; _a++) {
        var asd_1 = i_1[_a];
        p = p.replace(asd_1, arr2[replacer]);
    }
}
//# sourceMappingURL=asdsadasdsadasd.js.map