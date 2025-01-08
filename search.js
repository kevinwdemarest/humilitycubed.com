/* Author Claude and Kevin Demarest and ChatGPT ver 6 */
/* This is Javascript */

//<script type = "module"> no worky
// Add console logging
console.log('Search script loaded sucessfully');

// Add event listener to the search form
document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent normal form submission

    const query = document.getElementById('searchInput').value; // Get the search input value
    const resultsDiv = document.getElementById('searchResults'); // Results container

    try { 
        const response = await fetch('search.php?q=' + encodeURIComponent(query));
        if (!response.ok) {
            throw new Error('HTTP error! Status: ${response.status}');
    }
    const results = await response.json();
    
    // Log the raw results for debugging
    console.log('Raw response:', results); 

    /* Handle 
document.getElementById('searchForm').addEventListener('submit',     async function(e) {
    e.preventDefault(); // Prevent normal form submission

    const query = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('searchResults');

    try {
        const response = await fetch('search.php?q=' + encodeURIComponent(query));
        const results = await response.json();*/

    // Handle empty results
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found</p>';
        return;
    }

    // Build and display the results with HTML
    /*let html = '';*/
    let html = results.map(result => `
    <!-- This is really confusing, cuz' it's like an html comment inside a javascript html producer ... for (const result of results) { -->
        <!--html += -->
            <div class="result">
            <!-- //idea result.length -->
            <h3>${result.search}</h3>
            <p>${result.search_date}</p> 
            </div>
        `).join('');

    resultsDiv.innerHTML = html; // Update the results container
        //document.write(results.length);
        //resultsDiv.innerHTML = html;
    } catch (error) {
            console.error(error);
            resultsDiv.innerHTML = 'Error searching';
    }
});
//</script>

/* ver2
        const resultsDiv = document.getElementById('searchResults');
        resultsDiv.innerHTML = results.map(result => '
            <div class="result">
                <h3>${result.title}</h3>
                <p>${result.description}</p>
            </div>
        ').join('');
    } catch (error) {
        console.error(error);
        document.getElementById('searchResults').innerHTML = 'Error searching';
    }
});
*/

/* ver1
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const resultsDiv = document.querySelector('#searchResults');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchInput.value;

    try {
        const response = await fetch('search.php?q=${encodeURIComponent(query)}');
        const results = await response.json();

        resultsDiv.innerHTML = results.map(result => '
            <div class="result">
                <div class="result">
                    <h3>${result.title}</h3>
                    <p>${result.description}</p>
                </div>
            ').join('');
    } catch (error) {
        resultsDiv.innerHTML = '<p>Error searching. Please try again.</p>';
    }
});
*/                   
