const URL = 'https://localhost:5001/api/Employer'
// WORKS
export async function getEmployerByIdOrEmail(id_email) {
    var response = await fetch(`${URL}/${id_email}`)
    return response.ok ? await response.json() : null
}

// BUGGED ON BE
export async function deleteEmployerById(id) {

}

// WORKS
export async function updateEmployer(id, companyName, image) {
    var response = await fetch(`${URL}?id=${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            companyName: companyName,
            image: image
        })
    })

    return response.ok ? await response.json() : null
}

// WORKS
export async function createEmployer(credentialsId, companyName, image) {
    var response = await fetch(`${URL}?credentialsId=${credentialsId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            companyName: companyName, 
            image: image
        })
    })

    return response.ok ? await response.json() : null
}
