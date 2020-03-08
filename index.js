class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    get area() {
        return (this.radius ** 2) * Math.PI
    }

    set diameter(newDiameter) {
        this.radius = newDiameter/2
    }

    set circumference(newCircumferece) {
        let newRadius = (newCircumferece/Math.PI)/2
        this.radius = newRadius
    }

    set area(newArea) {
        let newRadius = Math.sqrt((newArea/Math.PI))
        this.radius = newRadius
    }
}

