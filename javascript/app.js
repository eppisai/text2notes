function convert() {
    var clear = document.getElementById("output").innerText = "";
    console.log("running");
    var data = document.getElementById("data").value;
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        if (data[i] == ",") {
            var d = "comma"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == ".") {

            var d = "fullstop"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "!") {
            var d = "exclamation"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "-") {
            var d = "hiphen"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "#") {
            var d = "hash"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "?") {
            var d = "question"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "(") {
            var d = "bracketop"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == ")") {
            var d = "bracketcl"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == ":") {
            console.log("here")
            var d = "colon"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == ";") {
            var d = "semicolon"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "{") {
            var d = "Cbracketop"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "}") {
            var d = "Cbracketcl"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "[") {
            var d = "osb"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "]") {
            var d = "csb"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "<") {
            var d = "oab"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == ">") {
            var d = "cab"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "=") {
            var d = "equals"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "'") {
            var d = "osq"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "%") {
            var d = "percent"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "&") {
            var d = "empersand"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "$") {
            var d = "dollar"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "@") {
            var d = "at"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "*") {
            var d = "asterisk"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "_") {
            var d = "underscore"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "\n") {
            var br = document.createElement("br");
            var div = document.getElementById("output").appendChild(br);

        } else if (data[i] == " ") {
            var space = document.createElement("span");
            space.innerHTML = "&nbsp &nbsp&nbsp";
            var div = document.getElementById("output").appendChild(space);

        } else {
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + data[i] + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);

        }


    }
}

function live() {

    var clear = document.getElementById("output").innerText = "";
    console.log("running");
    var data = document.getElementById("data").value;
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        if (data[i] == ",") {
            var d = "comma"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == ".") {

            var d = "fullstop"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "!") {
            var d = "exclamation"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "-") {
            var d = "hiphen"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "#") {
            var d = "hash"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "?") {
            var d = "question"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "(") {
            var d = "bracketop"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == ")") {
            var d = "bracketcl"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == ":") {
            console.log("here")
            var d = "colon"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == ";") {
            var d = "semicolon"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "{") {
            var d = "Cbracketop"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "}") {
            var d = "Cbracketcl"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "[") {
            var d = "osb"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "]") {
            var d = "csb"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "<") {
            var d = "oab"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == ">") {
            var d = "cab"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "=") {
            var d = "equals"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "'") {
            var d = "osq"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "%") {
            var d = "percent"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "&") {
            var d = "empersand"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "$") {
            var d = "dollar"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "@") {
            var d = "at"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "*") {
            var d = "asterisk"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "_") {
            var d = "underscore"
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + d + ".png");
            image.setAttribute("heigth", "30");
            var div = document.getElementById("output").appendChild(image);
        } else if (data[i] == "\n") {
            console.log("new Line");
            var br = document.createElement("br");
            var div = document.getElementById("output").appendChild(br);
        } else {
            console.log(data[i]);
            var image = document.createElement("img");
            image.setAttribute("src", "letter/" + data[i] + ".png");
            image.setAttribute("width","30");
            var div = document.getElementById("output").appendChild(image);
        }
    }
}
