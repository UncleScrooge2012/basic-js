const chainMaker = {
  res: [],

  getLength() {
      return this.res.length;
  },
  addLink(value) {
      this.res.push(value);
      return this;
  },
  removeLink(position) {
      if (this.res[position - 1] == undefined) {
          this.res = [];
          throw new Error("Error");
      }
      this.res.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
      this.res.reverse();
      return this;
  },
  finishChain() {
      let rest = "";
      this.res.forEach((el, i) => {
          if (i === 0) {
              rest += "( ";
          }
          rest += el + " )~~( ";
          if (i === this.res.length - 1) {
              rest = rest.substring(0, rest.length - 4);
          }
      });
      this.res = [];
      return rest;
  }
};
module.exports = chainMaker;
