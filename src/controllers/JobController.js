const URL = 'https://localhost:5001/api/Job'

// Works
export async function getJobById(id) {
    var response = await fetch(`${URL}/${id}`)
    return response.ok ? await response.json() : null
}

// BUGGED ON BE
export async function deleteJobById(id) {

} 

export async function getJobs(location, position, level, salary) {
    var response = await fetch(`${URL}?location=${location}&position=${position}&level=${level}&salary=${salary}`)
    return response.ok ? await response.json() : null
}

export async function getJobsForEmployer(employerId) {
    var response = await fetch(`${URL}/${employerId}/GetJobsForEmployer`)
    return response.ok ? await response.json() : null
}

// works
export async function updateJob(id, location, position, level, salary, minQual, prfQual, description) {
    var response = await fetch(`${URL}?id=${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            location: location,
            position: position,
            level: level,
            salary: salary,
            minimumQualifications: minQual,
            preferredQualifications: prfQual,
            description: description
        })
    })

    return response.ok ? await response.json() : null
}


// works
export async function createJob(employerId, location, position, level, salary, minQual, prfQual, description) {
    var response = await fetch(`${URL}?employerId=${employerId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            employerId: employerId,
            location: location,
            position: position,
            level: level,
            salary: salary,
            minimumQualifications: minQual,
            preferredQualifications: prfQual,
            description: description
        })
    })

    return response.ok ? await response.json() : null
}
