class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // diameter = radius * 2
    // 6 = 3 * 2
    // diameter / 2 = radius
    get diameter() {
        return this.radius * 2;
    }

    set diameter(number) {
        this.radius = number / 2;
    }

    // circumference = pi * diameter
    // circumference = pi * (radius * 2)
    // 18.85 = 3.14 * (3 * 2)
    // circumference / pi = radius * 2
    // circumference / pi * 2 = radius
    get circumference() {
        return Math.PI * this.diameter;
    }

    set circumference(number) {
        this.radius = number / (Math.PI * 2)
    }

    // area = pi * radius ** 2
    // 28.27 = 3.14 * 3 ** 2
    get area() {
        return Math.PI * this.radius ** 2;
    }
}