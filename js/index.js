$(document).ready(() => {
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
        var att4 = document.createAttribute("class");
        att4.value = "contentp";
        p.setAttributeNode(att4);

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
      if ($('#showansbutton:checked') !== null) {
        $(".contentp").hide() 
      }
  });

  const search = () => {
    var input, filter, li, a, i, txtValue;
    input = $('#search');
    filter = input[0].value.toUpperCase();
    li = $('li');

    var count = 0;

    if (filter.length > 0) {
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("button")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 && count <= 10) {
                li[i].style.display = "block";
                count += 1;
            } else {
                li[i].style.display = "none";
            }
        }
    }
    else {
        li.hide();
    }
    if (count >= 10 && filter.length > 0) {
            document.getElementById("overflow").style.display = "block";
    }
    else {
        document.getElementById("overflow").style.display = "none";
    }
  }

  const showAnswers = () => {
    $(".contentp").toggle() 
  }