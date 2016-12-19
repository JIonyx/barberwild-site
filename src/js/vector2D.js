// vectors
function Vector2D(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector2D.prototype.getlength = function() {
    return Math.sqrt(this.getLengthSquare());
}

Vector2D.prototype.getLengthSquare = function() {
    return this.x * this.x + this.y * this.y;
}

Vector2D.prototype.multiply = function() {

}

Vector2D.prototype.devide = function() {

}

Vector2D.prototype.normalize = function() {

}

