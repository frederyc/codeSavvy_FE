const URL = 'https://localhost:5001/api/Favorite'

// WORKS
export async function getFavoriteById(id) {
    var response = await fetch(`${URL}/${id}/GetFavoriteById`)
    return response.ok ? await response.json() : null
}

// WORKS
export async function getFavoriteForEmployee(employeeId) {
    var response = await fetch(`${URL}/${employeeId}/GetFavoriteForEmployee`)
    return response.ok ? await response.json() : null
}

// BUGGED ON BE
export async function deleteFavoriteById(id) {
    var response = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.ok ? await response.json() : null
}

// WORKS
export async function createFavorite(jobId, employeeId) {
    var response = await fetch(`${URL}?jobId=${jobId}&employeeId=${employeeId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            jobId: jobId,
            employeeId: employeeId
        })
    })

    return response.ok ? await response.json() : null
}