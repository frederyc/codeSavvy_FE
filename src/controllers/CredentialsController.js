const URL = 'https://localhost:5001/api/Credentials'

// WORKS
export async function getCredentialsByIdOrEmail(id_email) {
    var response = await fetch(URL + '/' + id_email)
    return response.ok ? response.json() : null
}

// TODO
// export async function getCredentialsByEmailAddress(email) {
//     var response = await fetch(URL + '/' + email)
//     console.log(await response.json())
//     return response.ok ? await response.json() : null
// }

// WORKS
export async function createCredentials(email, password) {
    var response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })

    return response.ok ? await response.json() : null
}

// WORKS
export async function updateCredentials(id, email, password) {
    var response = await fetch(URL + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
    
    return response.ok ? await response.json() : null
}

