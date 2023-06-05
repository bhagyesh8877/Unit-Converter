function convert() {
    var inputValue = document.getElementById("inputValue").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
  
    var outputValue;
  
    // Conversion logic
    if (inputUnit === "meter") {
      if (outputUnit === "meter") {
        outputValue = inputValue;
      } else if (outputUnit === "centimeter") {
        outputValue = inputValue * 100;
      } else if (outputUnit === "inch") {
        outputValue = inputValue * 39.37;
      } else if (outputUnit === "foot") {
        outputValue = inputValue * 3.281;
      }
    } else if (inputUnit === "centimeter") {
      // Complete the conversion logic for other units
    }
  
    document.getElementById("outputValue").value = outputValue;
  }
  