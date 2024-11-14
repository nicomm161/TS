//mkdir namespaces
//cd namespaces
//code .
namespace Utility{
    export namespace Taxes {
        export function calculateIVA(price:number) {
            return (price * 0.21) + price;
        }
        export function calculatePenaltyIVA(price:number){
            return (price * 0.30) + price;
        }
        

    }
}
