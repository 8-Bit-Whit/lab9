var template = `
    {{#.}}
    <div class="profile-card">
        <div class="profile-header">
            <div class="profile-icon">{{Name.0}}</div>
            <div class="profile-name">{{Name}}</div>
        </div>
        <div class="profile-details">
            <div class="profile-position">
                <span class="position-title">{{Position}}</span>
            </div>
            <div class="profile-info">
                <div>👩‍🎓 {{Major}}</div>
                <div>🎓 {{Year}}</div>
            </div>
        </div>
    </div>
    {{/.}}
`;

// Get the 'output' div element
var output = document.getElementById('output');

// Fetch JSON data and process it
fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Fix name capitalization inconsistency and ensure all data is present
        data = data.map(person => ({
            Name: person.Name || person.name,
            Position: person.Position,
            Major: person.Major,
            Year: person.Year
        }));
        
        // Render the data using the template
        var rendered = Mustache.render(template, data);
        output.innerHTML = rendered;
    })
    .catch(function(error) {
        console.error('Error:', error);
        output.innerHTML = 'Error loading data';
    });
    .catch(function(error) {
        console.error('Error:', error);
    });
