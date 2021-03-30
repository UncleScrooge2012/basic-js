const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let index = 1;
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            let res = this.calculateDepth(arr[i]) + 1;
            if (res > index) index = res;
        }
    }
    return index;
}
};