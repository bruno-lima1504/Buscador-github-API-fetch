const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatar}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <p>Seguidores: ${user.followers}</p>
                                            <p>Seguindo: ${user.following}</p>

                                        </div>
                                      </div>`
                         
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += 
            `<li>
                <a href="${repo.html_url}" target="_blank">${repo.name}
                    <ul class="repositoriesStats">
                        <li>🍴 ${repo.forks_count}</li>
                        <li>🌟 ${repo.stargazers_count}</li>
                        <li>👀 ${repo.watchers_count}</li>
                        <li>👅 ${repo.language}</li>
                    </ul>    
                 </a>
            </li>`) 

        if(user.repositories.length > 0 ){        
            this.userProfile.innerHTML +=   `<div class="repositories section">
                                            <h2>Repositorios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = ''
        user.events.forEach(events  => eventsItens +=
        `<li><p><strong>${events.repo.name}</strong> - ${events.payload.description}</p>
        </li>`)        
        if(user.events.length > 0){           
           this.userProfile.innerHTML += `<div         class="events section">
                                        <h2>Eventos</h2>
                                        <ul>${eventsItens}
                                        </ul>
                                        </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export {screen}