function searchUser() {
    const username = document.getElementById("searchInput").value;

    // GitHub API URLs
    const userUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos`;

    // Perform GitHub API requests using Fetch API
    Promise.all([
        fetch(userUrl).then(response => response.json()),
        fetch(reposUrl).then(response => response.json())
    ])
    .then(([userData, repoData]) => {
        // Update user profile
        const userProfileContainer = document.getElementById("userProfile");
        userProfileContainer.innerHTML = `
            <h2>${userData.name}</h2>
            <p>${userData.bio}</p>
            <img src="${userData.avatar_url}" alt="Avatar">
        `;

        // Update repository list
        const repoListContainer = document.getElementById("repoList");
        const repoList = repoData.map(repo => `<li>${repo.name}</li>`).join('');
        repoListContainer.innerHTML = `<h3>Repositories:</h3><ul>${repoList}</ul>`;
    })
    .catch(error => console.error("Error fetching data:", error));
}
  