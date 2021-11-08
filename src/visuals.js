import { bubble_sort } from "./bubble_sort";

export default class Visuals {

  static methods = {
    BUBBLE: { type: "BUBBLE" }
  }

  constructor(method, array) {
    this.sorted = this.sort(method, array)
    this.draw();
  }

  sort(method, array) {
    let sorted;

    switch(method.type) {
      case "BUBBLE":
        sorted = bubble_sort(array);
        break;

      default:
        break;
    }

    return sorted;
  }

  draw() {
    console.log(this.sorted)
  }

}
