document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('query').value.trim();
    // Call a Google Apps Script function here if needed
    console.log("Query submitted:", query);
});
