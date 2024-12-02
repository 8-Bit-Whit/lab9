// Simple template for team members
var template = `
    {{#.}}
    <div class="profile-card">
        <div class="profile-header">
            <div class="profile-icon">{{Name.0}}</div>
            <div class="profile-name">{{Name}}</div>
        </div>
        <div class="profile-details">
            <div class="profile-position">{{Position}}</div>
            <div>{{Major}}</div>
            <div>{{Year}}</div>
        </div>
    </div>
    {{/.}}
`;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const output = document.getElementById('output');
        const rendered = Mustache.render(template, data);
        output.innerHTML = rendered;
    })
    .catch(error => console.error('Error:', error));
