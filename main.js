document.addEventListener('DOMContentLoaded', function () {

    const username = "Xanaxx999";

    fetch(`https://api.github.com/users/${username}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            document.querySelector('.profile-name').innerText = data.name;
            document.querySelector('.profile-username').innerText = '@' + data.login;
            document.querySelector('.repos').innerText = data.public_repos;
            document.querySelector('.followers').innerText = data.followers;
            document.querySelector('.following').innerText = data.following;
            document.querySelector('.profile-avatar').src = data.avatar_url;
            document.querySelector('.profile-link').href = data.html_url;
        })
        .catch(function(error) {
            console.error('Erro:', error);
        });

});