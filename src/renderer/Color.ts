export class Color {
    public static hex(hexadecimal: number) {
        return this.hexAlpha(hexadecimal, 1.0);
    }

    public static hexAlpha(hexadecimal: number, alpha: number) {
        const red = (hexadecimal >> 16) & 0xFF;
        const green = (hexadecimal >> 8) & 0xFF;
        const blue = hexadecimal & 0xFF;

        return this.rgba(red, green, blue, alpha);
    }

    public static rgb(red: number, green: number, blue: number) {
        return this.rgba(red, green, blue, 1.0);
    }

    public static rgba(red: number, green: number, blue: number, alpha: number) {
        return new Color(red, green, blue, alpha);
    }

    private red: number;
    private green: number;
    private blue: number;
    private alpha: number;

    private constructor(red: number, green: number, blue: number, alpha: number) {
        this.red = red;
        this.blue = blue;
        this.green = green;
        this.alpha = alpha;
    }

    public toString() {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }
}