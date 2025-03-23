function searchProduct() {
    let query = document.getElementById('search').value;
    if (query) {
        alert("Searching for: " + query);
        // Future: Fetch AI results from backend
    } else {
        alert("Please enter a product to search.");
    }
}
