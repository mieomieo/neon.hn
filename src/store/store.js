import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      lightOn: true,
      currentColorOff: {
        color: "rgb(244, 244, 244)",
        textShadow:
          "rgb(181 181 181) 0px 1px 0px, rgb(169 169 169) 0px 2px 0px, rgb(148 148 148) 0px 3px 0px, rgb(125 125 125) 0px 4px 0px, rgb(0 0 0 / 23%) 0px 0px 5px, rgb(0 0 0 / 43%) 0px 1px 3px, rgb(0 0 0 / 40%) 1px 4px 6px, rgb(0 0 0 / 38%) 0px 5px 10px, rgb(0 0 0 / 25%) 3px 7px 12px",
      },
      currentColorOn:
        "rgb(255 255 255) 0px 0px 5px, rgb(255 255 255) 0px 0px 10px, rgb(9, 201, 237) 0px 0px 20px, rgb(9, 201, 237) 0px 0px 30px, rgb(9, 201, 237) 0px 0px 40px, rgb(9, 201, 237) 0px 0px 55px, rgb(9, 201, 237) 0px 0px 75px",
    };
  },
  actions: {},
  mutations: {
    setColor(state, item) {
      item = JSON.parse(JSON.stringify(item));
      // state.currentColorOff.color = item.colorOff.color;
      // state.currentColorOn = item.colorOn;
      // state.currentColorOff.textShadow = item.colorOff.textShadow;
      console.log(item);
      // console.log(item);
    },
  },
});
