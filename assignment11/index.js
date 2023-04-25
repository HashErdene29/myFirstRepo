Array.prototype.even = function() {
    return this.filter(num => num % 2 === 0);
};
  
Array.prototype.odd = function() {
    return this.filter(num => num % 2 !== 0);
};