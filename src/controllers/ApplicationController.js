const URL = 'https://localhost:5001/api/Application'

// WORKS
export async function createApplication(jobId, employeeId, resume) {
    var response = await fetch(`${URL}?jobId=${jobId}&employeeId=${employeeId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            jobId: jobId,
            employeeId: employeeId,
            resume: resume
        })
    })
    return response.ok ? await response.json() : null    
}

// BUGGED ON BE
export async function updateApplication(id, resume) {
    var response = await fetch('')
}

// WORKS
export async function getApplicationById(id) {
    var response = await fetch(`${URL}/${id}/GetApplicationById`)
    return response.ok ? await response.json() : null
}

// WORKS
export async function getApplicationForEmployee(employeeId) {
    var response = await fetch(`${URL}/${employeeId}/GetApplicationForEmployeeId`)
    return response.ok ? await response.json() : null
}

// WORKS
export async function getApplicationForJob(jobId) {
    var response = await fetch(`${URL}/${jobId}/GetApplicationForJobId`)
    return response.ok ? await response.json() : null
}

// BUGGED ON BE
export async function deleteApplication(id) {
    
}
