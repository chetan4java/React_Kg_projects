var gb = this;
console.log(this);
var foo = (() => this);
console.log(foo() === 'globalObject'); 
