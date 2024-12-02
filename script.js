// Updated template for team members
var template = `
    {{#data}}
    <div class="profile-card">
        <div class="profile-header">
            <div class="profile-icon">{{Name.0}}</div>
            <div class="profile-name">{{Name}}</div>
        </div>
        <div class="profile-details">
            <div class="profile-position">👩‍💻 {{Position}}</div>
            <div class="profile-education">
                <div>🎓 Major: {{Major}}</div>
                <div>📚 Year: {{Year}}</div>
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
        // Fix name capitalization inconsistency and wrap data in an object
        const processedData = {
            data: data.map(person => ({
                ...person,
                Name: person.Name || person.name  // Handle both 'Name' and 'name'
            }))
        };
        
        // Render the data using the template
        var rendered = Mustache.render(template, processedData);
        output.innerHTML = rendered;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
        
        // Render the data using the template
        var rendered = Mustache.render(template, data);
        output.innerHTML = rendered;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
