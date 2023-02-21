import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      lightOn: true,
      currentDemoFont: "Alexa",
      currentColorOff: {
        color: "rgb(244, 244, 244)",
        textShadow:
          "rgb(181 181 181) 0px 1px 0px, rgb(169 169 169) 0px 2px 0px, rgb(148 148 148) 0px 3px 0px, rgb(125 125 125) 0px 4px 0px, rgb(0 0 0 / 23%) 0px 0px 5px, rgb(0 0 0 / 43%) 0px 1px 3px, rgb(0 0 0 / 40%) 1px 4px 6px, rgb(0 0 0 / 38%) 0px 5px 10px, rgb(0 0 0 / 25%) 3px 7px 12px",
      },
      currentColorOn:
        "rgb(255 255 255) 0px 0px 5px, rgb(255 255 255) 0px 0px 10px, rgb(9, 201, 237) 0px 0px 20px, rgb(9, 201, 237) 0px 0px 30px, rgb(9, 201, 237) 0px 0px 40px, rgb(9, 201, 237) 0px 0px 55px, rgb(9, 201, 237) 0px 0px 75px",
      background: {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      },
      textInput: "Your Text",
    };
  },
  actions: {},
  mutations: {
    SetColor(state, item) {
      state.currentColorOff.color = item.colorOff.color;
      console.log(state.currentColorOff.color);
      state.currentColorOn = item.colorOn;
      state.currentColorOff.textShadow = item.colorOff.textShadow;
    },
    SetFont(state, item) {
      // state.currentSrcFont = item.src;
      state.currentDemoFont = item;
      // console.log(state.currentDemoFont);
      console.log(state.currentDemoFont);
    },
    setBackgroundInfo(state, payload) {
      state.background.x = payload.x;
      state.background.y = payload.x;
      state.background.width = payload.width;
      state.background.height = payload.height;
    },
    setTextInput(state, payload) {
      state.textInput = payload;
      // console.log(state.textInput);
    },
  },
});
