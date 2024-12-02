// Updated template to match new data structure
var template = `
    {{#data}}
    <div class="profile-card">
        <div class="profile-header">
            <div class="profile-icon">{{initial}}</div>
            <div class="profile-name">{{Name}}</div>
        </div>
        <div class="profile-details">
            <div class="profile-position">{{Position}}</div>
            <div>Major: {{Major}}</div>
            <div>Year: {{Year}}</div>
        </div>
    </div>
    {{/data}}
`;

// Get the 'output' div element
var output = document.getElementById('output');

// Fetch JSON data and add initials before rendering
fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Add initials for each person based on their name
        data = data.map(person => ({
            ...person,
            initial: person.Name ? person.Name.charAt(0) : person.name.charAt(0)
        }));
        
        // Render the data using the template
        var rendered = Mustache.render(template, { data: data });
        output.innerHTML = rendered;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
