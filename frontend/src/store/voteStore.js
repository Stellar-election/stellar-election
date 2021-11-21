import React from 'react'

export const VoteContext = React.createContext(null)

export default ({children}) => {

    const [citizenId, setCitizenId] = React.useState(null)
    const [currentState, setCurrentState] = React.useState(0)
    const [laserCardId, setLaserCardId] = React.useState(null)
    const [password, setPassword] = React.useState(null)
    const store = {
        citizen: {citizenId, setCitizenId},
        currentState: {currentState, setCurrentState},
        laserCardId: {laserCardId, setLaserCardId},
        password: {password, setPassword}

    }

    return <VoteContext.Provider value={store}>{children}</VoteContext.Provider>
}