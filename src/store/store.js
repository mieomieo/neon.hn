import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      lightOn: true,
      currentDemoFont: "Amanda",
      textInput: "Your Text",
      currentColorId: 1,
      currentDemoTextFontSize: 70,
      //currentWidthDemoText: 300,
      realDimensionInput: 0, // cm or inch
    };
  },
  actions: {},
  mutations: {
    SetColor(state, id) {
      state.currentColorId = id;
      // state.currentColorOff.color = item.colorOff.color;
      // console.log(state.currentColorOff.color);
      // state.currentColorOn = item.colorOn;
      // state.currentColorOff.textShadow = item.colorOff.textShadow;
    },
    SetFont(state, item) {
      // state.currentSrcFont = item.src;
      state.currentDemoFont = item;
      // console.log(state.currentDemoFont);
      console.log(state.currentDemoFont);
    },
    setTextInput(state, payload) {
      state.textInput = payload;
      // console.log(state.textInput);
    },
    setDemoTextFontSize(state, payload) {
      state.currentDemoTextFontSize = payload;
    },
    setRealDimension(state, dimension) {
      state.realDimensionInput = dimension;
    },
    setWidthDemoText(state, width) {
      state.currentWidthDemoText = width;
      console.log(state.currentWidthDemoText);
    },
  },
});
