const URL = 'https://localhost:5001/api/Employee'

// WORKS
export async function getEmployeeByIdOrEmail(id_email) {
    var response = await fetch(`${URL}/${id_email}`)
    return response.ok ? await response.json() : null
}

// BUGGED ON BE
export async function deleteEmployeeById(id) {

}

// WORKS
export async function updateEmployee(id, fullname) {
    var response = await fetch(`${URL}?id=${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullname: fullname
        })
    })

    return response.ok ? await response.json() : null
}

// WORKS
export async function createEmployee(credentialsId, fullname) {
    var response = await fetch(`${URL}?credentialsId=${credentialsId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            credentialsId: credentialsId,
            fullname: fullname
        })
    })

    return response.ok ? await response.json() : null
}
