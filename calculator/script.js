// let input = document.querySelector("#screen").value;
function resultBtn() {
    let input = document.querySelector("#screen").value;
  let output = eval(input);
  document.querySelector("#screen").value = output;
  console.log(output);
}

function clearBtn() {
      let input = document.querySelector("#screen").value="";
}
