// Updated template with better structure
var template = `
    {{#data}}
    <div class="profile-card">
        <div class="profile-header">
            <div class="profile-icon">{{initial}}</div>
            <div class="profile-name">{{name}}</div>
        </div>
        <div class="profile-details">
            <div>Age: {{age}} years old</div>
            <div class="profile-city">📍 {{city}}</div>
        </div>
    </div>
    {{/data}}
`;

// Get the 'output' div element
var output = document.getElementById('output');

// Fetch JSON data from the file
fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Render the data using the template
        var rendered = Mustache.render(template, { data: data });
        output.innerHTML = rendered;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
