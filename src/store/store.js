import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentUnit: "inch",
      lightOn: true,
      currentDemoFont: "Alexa",
      textInput: "Your Text",
      currentTextAlign: "left",
      // "<span>Your</span><br><span>Text</span><br><span>ABC</span><br> <span>Thhjhgj</span>",
      currentColorId: 1,
      currentDemoTextFontSize: 50,
      currentWidthDemoText: 200, //px
      realDimensionInput: 0, // cm or inch
      realDimensionDemoText: 0,
      currentDimensionOfDemoText: {
        //cm or inch
        width: 0,
        height: 0,
      },
      currentInputRange: false,
    };
  },
  actions: {},
  mutations: {
    setCurrentTextAlign(state, currentTextAlign) {
      state.currentTextAlign = currentTextAlign;
    },
    SetCurrentUnit(state, unit) {
      state.currentUnit = unit;
    },
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
      // console.log(state.currentDemoFont);
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
      // console.log(state.currentWidthDemoText);
    },
    setDimensionOfDemoText(state, dimensionOfDemoText) {
      // console.log("in store");
      // console.log("dimensionOfDemoText.width", dimensionOfDemoText.width);
      state.currentDimensionOfDemoText.width = dimensionOfDemoText.width;
      state.currentDimensionOfDemoText.height = dimensionOfDemoText.height;
    },
    setRealDimensionInput(state, realDimension) {
      state.realDimensionInput = realDimension;
    },
    setCurrentInputRange(state, current) {
      state.currentInputRange = current;
      console.log(current);
    },
  },
});
