// Updated template for team members
var template = `
    {{#data}}
    <div class="profile-card">
        <div class="profile-header">
            <div class="profile-icon">{{FirstInitial}}</div>
            <div class="profile-name">{{Name}}</div>
        </div>
        <div class="profile-details">
            <div class="profile-position">🎯 {{Position}}</div>
            <div class="profile-education">
                <div>🎓 {{Major}}</div>
                <div>📚 {{Year}} Year</div>
            </div>
        </div>
    </div>
    {{/data}}
`;

// Get the 'output' div element
var output = document.getElementById('output');

// Fetch JSON data and process it
fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Add first initial for each person
        data = data.map(person => ({
            ...person,
            FirstInitial: (person.Name || person.name).charAt(0)
        }));
        
        // Render the data using the template
        var rendered = Mustache.render(template, { data: data });
        output.innerHTML = rendered;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
