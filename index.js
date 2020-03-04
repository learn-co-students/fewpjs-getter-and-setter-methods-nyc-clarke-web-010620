class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.radius * 2 * Math.PI 
    }

    get area() {
        return (this.radius * this.radius) * Math.PI 
    }

    set area(newArea) {
        return this.radius = Math.sqrt((newArea/Math.PI))
    }

    set diameter(newDiameter) {
        return this.radius = newDiameter / 2 
    }

    set circumference(newCircumference) {
        return this.radius = newCircumference / (2 * Math.PI)
    }
}