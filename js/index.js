"use strict";
$(document).ready(function() {

    for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        var content = document.createElement("div");
        var header = document.createElement("button");
        var p = document.createElement("p");
        var prob = document.createTextNode(data[i].problem);
        var ans = document.createTextNode(`Answer: ${data[i].answer}`);

        var att = document.createAttribute("class");
        att.value = "collapsible";
        header.setAttributeNode(att);
        var att2 = document.createAttribute("class");
        att2.value = "content";
        content.setAttributeNode(att2);
        var att3 = document.createAttribute("width");
        att3.value = "100%";
        p.setAttributeNode(att3);

        header.addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });

        header.appendChild(prob);
        li.appendChild(header);
        p.appendChild(ans);
        content.appendChild(p);
        li.appendChild(content);
        probs.appendChild(li);
      }
  
  }); // end ready()