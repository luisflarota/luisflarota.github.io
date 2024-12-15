$(function(){

    /* build and append preformated code examples */
    $("div#content").find("p").last().after(buildCodeBlocks);

    /* toggle/collapse preformated code blocks */
    //$("pre").bind("click", function(){
    //    this.className = this.className.indexOf("collapse") === -1 ?
    //        ( "collapse " + this.className ) : this.className.replace("collapse ", "");
    //});
    
    /* apply code highlight */
    $('pre code').each( function(i, e) {
        hljs.highlightBlock(e, '    ');
    });

});

function buildCodeBlocks() {
    return "<div class='codeBlocks clearfix'>" +
    "<pre class='html'><code>" + getHtml() + "</code></pre>" +
    "<pre class='javascript'><code>" + cleanJson( $("head script").last().text() ) + "</code></pre>" +
    "<pre class='css'><code>" + cleanCSS( $("head style").text() ) + "</code></pre>" +
    "</div>";
}


function getHtml() {
    var clone, ul, li, code;

    clone = $("<div />").append($("div#content").contents().not("h2, p").clone());
    ul = clone.find("ul");
    li = ul.find("li");

    li.slice(3, li.length).remove();
    ul.append("...");

    code = clone.html();

    return cleanHTML(code).replace(/</gi, "&lt;").replace(/>/gi, "&gt;");;
    //code = $.tabifier(code, "HTML").replace(/</gi, "&lt;").replace(/>/gi, "&gt;");

}

document.getElementById('toggleBackground').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    // Toggle icon
    const icon = document.getElementById('toggleIcon');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    // Change background to light and white
    if (document.body.classList.contains('light-mode')) {
        document.body.style.backgroundColor = '#ffffff'; // White background
        document.body.style.color = '#000000'; // Black text
    } else {
        document.body.style.backgroundColor = ''; // Reset to default
        document.body.style.color = ''; // Reset to default
    }
});
