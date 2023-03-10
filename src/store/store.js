import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentUnit: "in",
      lightOn: true,
      currentDemoFont: "Breathing",
      textInput: "Your Text",
      currentTextAlign: "left",
      currentColorId: 1,
      currentDemoTextFontSize: 50,
      currentWidthDemoText: 200, //px
      realDimensionInput: 0, // cm or inch
      realDimensionDemoText: 0,
      currentHeightOfDemoText: 0, //px
      currentDimensionOfDemoText: {
        //cm or inch
        width: 0,
        height: 0,
      },
      currentInputRange: false,
      currentRotateX: 0,
      currentRotateY: 0,
      currentRotateZ: 0,
    };
  },
  actions: {},
  mutations: {
    setCurrentRotateX(state, number) {
      state.currentRotateX = number;
    },
    setCurrentRotateY(state, number) {
      state.currentRotateY = number;
    },
    setCurrentRotateZ(state, number) {
      state.currentRotateZ = number;
    },
    setHeightOfDemoText(state, height) {
      state.currentHeightOfDemoText = height;
    },
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
      state.currentDimensionOfDemoText.width = dimensionOfDemoText.width;
      state.currentDimensionOfDemoText.height = dimensionOfDemoText.height;
    },
    setNewHeightDimensionDemoText(state, updateHeightDimensionDemoText) {
      state.currentDimensionOfDemoText = {
        ...state.currentDimensionOfDemoText,
        height: updateHeightDimensionDemoText,
      };
    },

    setRealDimensionInput(state, realDimension) {
      state.realDimensionInput = realDimension;
    },
    setCurrentInputRange(state, current) {
      state.currentInputRange = current;
      // console.log(current);
    },
  },
});
