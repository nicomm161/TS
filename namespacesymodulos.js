"use strict";
//mkdir namespaces
//cd namespaces
//code .
var Utility;
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calculateIVA(price) {
            return (price * 0.21) + price;
        }
        Taxes.calculateIVA = calculateIVA;
        function calculatePenaltyIVA(price) {
            return (price * 0.30) + price;
        }
        Taxes.calculatePenaltyIVA = calculatePenaltyIVA;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
