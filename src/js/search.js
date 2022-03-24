function searchProducts() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("productSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchSection");
    li = ul.getElementsByClassName("product");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h2")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}