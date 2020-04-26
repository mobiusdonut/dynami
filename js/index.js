const stopword = ["about","after","all","also","am","an","and","another","any","are","as","at","be","because","been","before","being","between","both","but","by","came","can","come","could","did","do","each","for","from","get","got","has","had","he","have","her","here","him","himself","his","how","if","in","into","is","it","like","make","many","me","might","more","most","much","must","my","never","now","of","on","only","or","other","our","out","over","said","same","see","should","since","some","still","such","take","than","that","the","their","them","then","there","these","they","this","those","through","to","too","under","up","very","was","way","we","well","were","what","where","which","while","who","with","would","you","your","a","i"]

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
    if ($('#showansbutton:checked').length > 0) {
        $(".contentp").hide() 
    }
    else {
        $(".contentp").show() 
    }
  });

  const search = () => {
    var li, a, txtValue;
    li = $('li');
    var keywords = $('#search')[0].value.toLowerCase().split(' ').filter(function(word) { return !(word in stopword) && word.length > 3})

    if (keywords.length > 0) {
        for (let i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("button")[0];
            txtValue = a.textContent || a.innerText;
            txtSplit = txtValue.toLowerCase().split(" ")
            if ((keywords).every(function(word) {return txtValue.toLowerCase().indexOf(word) !== -1})) {
                li[i].style.display = "block";
            }
            else {
                li[i].style.display = "none";
            }
        }
    }
    else {
        li.hide();
    }
  }

  const showAnswers = () => {
    $(".contentp").toggle() 
  }