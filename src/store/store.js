import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      lightOn: true,
      currentDemoFont: "Alexa",
      textInput: "YourText",
      currentColorId: 1,
      currentDemoTextFontSize: 50,
      currentWidthDemoText: 0,
      realDimensionInput: 0, // cm or inch
      realDimensionDemoText: 0,
      currentDimensionOfDemoText: {
        width: 0,
        height: 0,
      },
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
    setRealDimensionInput(state, dimension) {
      state.realDimensionInput = dimension;
    },
    setWidthDemoText(state, width) {
      state.currentWidthDemoText = width;
      console.log(state.currentWidthDemoText);
    },
    setDimensionOfDemoText(state, dimensionOfDemoText) {
      console.log("in store");
      console.log("dimensionOfDemoText.width", dimensionOfDemoText.width);
      state.currentDimensionOfDemoText.width = dimensionOfDemoText.width;
      state.currentDimensionOfDemoText.height = dimensionOfDemoText.height;
    },
    setRealDimensionInput(state, realDimension) {
      state.realDimensionInput = realDimension;
    },
  },
});
