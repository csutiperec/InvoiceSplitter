import React, {useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const GroupsContext = React.createContext({});
export const GroupsUpdateContext = React.createContext({});

export function useGroups():Array<Group>{
    //@ts-ignore
    return useContext(GroupsContext);
}
export function useGroupUpdateContext():any{
    return useContext(GroupsUpdateContext);
}

export function GroupsProvider({children}:any)
{
    const [groups, setGroups] = useState([] as Array<Group>);

    const initGroups = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@groups');
            if(jsonValue != null){
                setGroups(JSON.parse(jsonValue));
            }
            else{
                setGroups([]);
            }
        } catch (error) {
            console.log(error);
            setGroups([]);
        }
    }

    async function updateGroups(newValue:Array<Group>){
        setGroups(newValue);
        try {
            await AsyncStorage.setItem('@groups', JSON.stringify(newValue));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        initGroups();
    }, [])


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