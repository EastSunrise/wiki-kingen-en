// open a http/https link in a new label
for (let a of document.getElementsByTagName("a")) {
    let href = a.getAttribute("href") || "";
    if (href.startsWith("http://") || href.startsWith("https://")) {
        a.setAttribute("target", "_blank");
    }
}

// replace footers of mkdocs
for (let footer of document.getElementsByTagName("footer")) {
    footer.innerHTML =
        "<p style='text-align: center;'><a href='https://github.com/eastsunrise/wiki-kingen-en/'>wiki-kingen-en - GitHub</a>&emsp;" +
        "|&emsp;<a href='https://eastsunrise.github.io/wiki-kingen/'>Chinese</a></p>";
}
