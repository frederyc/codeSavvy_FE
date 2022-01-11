import React, { createContext, useState } from 'react';

export const JobContext = createContext(undefined);

const JobProvider = ({ children }) => {

    const [job, setJob] = useState(undefined)

    const state = {job, setJob};

    return (
        <JobContext.Provider value={state}>
            {children}
        </JobContext.Provider>
    );
};

const useJobContext = () => {
    const context = React.useContext(JobContext);
    if (context === undefined) {
        throw new Error('useJobContext must be used within a JobProvider');
    }

    return context;
};

export { JobProvider, useJobContext };