import React, {useState, useContext} from 'react';


export const GroupsContext = React.createContext({});
export const GroupsUpdateContext = React.createContext({});

export function useGroups(){
    return useContext(GroupsContext);
}
export function useGroupUpdateContext(){
    return useContext(GroupsUpdateContext)
}

export function GroupsProvider({children}:any)
{
    const [groups, setGroups] = useState([] as Array<Group>);

    function updateGroups(newValue:Array<Group>){
        setGroups(newValue);
    }

    return(
        <GroupsContext.Provider value={groups}>
            <GroupsUpdateContext.Provider value={updateGroups}>
                {children}
            </GroupsUpdateContext.Provider>
        </GroupsContext.Provider>
        
    )
}
type Group = {
    name:string,
    members:Array<string>
}