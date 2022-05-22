import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discoveredSatellite:"Unknown Satellite",
  partData:"",
  partClicked:false,
  gridClicked:false,
  gridOneContent: "01",
  gridTwoContent: "02",
  gridThreeContent: "03",
  gridFourContent: "04",
  gridFiveContent: "05",
  gridSixContent: "06",
  gridSevenContent: "07",
  gridEightContent: "08",
  gridNineContent: "09",

  gridOnePlaced: false,
  gridTwoPlaced: false,
  gridThreePlaced:false,
  gridFourPlaced: false,
  gridFivePlaced:false,
  gridSixPlaced: false,
  gridSevenPlaced: false,
  gridEightPlaced:false,
  gridNinePlaced:false,

  antenna: 0,
  transponder: 0,
  solar: 0,
  nuclear: 0,
  camera: 0,
  radiation: 0,
  infared: 0,
  thrusters: 0,
  clock:0
};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setAntenna: (state, action) => {
      console.log("Increased");
      state.antenna++;
    },
    setTransponder: (state, action) => {
      state.transponder++;
    },
    setSolar: (state, action) => {
      state.solar++;
    },
    setClock: (state, action) => {
      state.clock++;
    },
    setNuclear: (state, action) => {
      state.nuclear++;
    },
    setCamera: (state, action) => {
      state.camera++;
    },
    setRadiation: (state, action) => {
      state.radiation++;
    },
    setInfared: (state, action) => {
      state.infared++;
    },
    setThrusters: (state, action) => {
      state.thrusters++;
    },
    setPartData: (state, action) => {
      state.partData = action.payload;
    },
    
    setGridOneContent: (state, action) => {
      state.gridOneContent = action.payload;
    },
    setGridTwoContent: (state, action) => {
      state.gridTwoContent = action.payload;
    },
    setGridThreeContent: (state, action) => {
      state.gridThreeContent = action.payload;
    },
    setGridFourContent: (state, action) => {
      state.gridFourContent = action.payload;
    },
    setGridFiveContent: (state, action) => {
      state.gridFiveContent = action.payload;
    },
    setGridSixContent: (state, action) => {
      state.gridSixContent = action.payload;
    },
    setGridSevenContent: (state, action) => {
      state.gridSevenContent = action.payload;
    },
    setGridEightContent: (state, action) => {
      state.gridEightContent = action.payload;
    },
    setGridNineContent: (state, action) => {
      state.gridNineContent = action.payload;
    },
    setPartClicked: (state, action) => {
      state.partClicked = action.payload;
    },
    setGridClicked: (state, action) => {
      state.gridClicked = action.payload;
    },
    setOnePlaced:(state)=>{
      state.gridOnePlaced=true;
    },
    setTwoPlaced:(state)=>{
      state.gridTwoPlaced=true;
    },
    setThreePlaced:(state)=>{
      state.gridThreePlaced=true;
    },
    setFourPlaced:(state)=>{
      state.gridFourPlaced=true;
    },
    setFivePlaced:(state)=>{
      state.gridFivePlaced=true;
    },
    setSixPlaced:(state)=>{
      state.gridSixPlaced=true;
    },
    setSevenPlaced:(state)=>{
      state.gridSevenPlaced=true;
    },
    setEightPlaced:(state)=>{
      state.gridEightPlaced=true;
    },
    setNinePlaced:(state)=>{
      state.gridNinePlaced=true;
    },
    setDiscoveredSatellite:(state,action)=>{
      state.discoveredSatellite=action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setAntenna,setDiscoveredSatellite,
  setTransponder,
  setSolar,
  setNuclear,
  setCamera,
  setRadiation,
  setInfared,
  setThrusters,
  setPartData,
  setGridOneContent,
  setGridTwoContent,
  setGridThreeContent,
  setGridFourContent,
  setGridFiveContent,
  setGridSixContent,
  setGridSevenContent,
  setGridEightContent,
  setGridNineContent,
  setOnePlaced,
  setTwoPlaced,
  setThreePlaced,
  setFourPlaced,
  setFivePlaced,
  setSixPlaced,
  setSevenPlaced,
  setEightPlaced,
  setNinePlaced,
  setClock,
  setPartClicked,
  setGridClicked
} = componentSlice.actions;
export const partData=(state)=>state.component.partData
export const discoveredSatellite=(state)=>state.component.discoveredSatellite
export const gridClicked=(state)=>state.component.gridClicked
export const gridOnePlaced=(state)=>state.component.gridOnePlaced
export const gridTwoPlaced=(state)=>state.component.gridTwoPlaced
export const gridThreePlaced=(state)=>state.component.gridThreePlaced
export const gridFourPlaced=(state)=>state.component.gridFourPlaced
export const gridFivePlaced=(state)=>state.component.gridFivePlaced
export const gridSixPlaced=(state)=>state.component.gridSixPlaced
export const gridSevenPlaced=(state)=>state.component.gridSevenPlaced
export const gridEightPlaced=(state)=>state.component.gridEightPlaced
export const gridNinePlaced=(state)=>state.component.gridNinePlaced

export default componentSlice.reducer;
