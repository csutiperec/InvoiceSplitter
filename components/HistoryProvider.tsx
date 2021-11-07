import React, {useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const HistoryContext = React.createContext({});
export const HistoryUpdateContext = React.createContext({});

export function useHistory():Array<History>{
    //@ts-ignore
    return useContext(HistoryContext);
}
export function useHistoryUpdateContext():any{
    return useContext(HistoryUpdateContext);
}

export function HistoryProvider({children}:any)
{
    const [history, setHistory] = useState([] as Array<History>);

    const initHistory = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@history');
            if(jsonValue != null){
                setHistory(JSON.parse(jsonValue));
                console.log('Read '+jsonValue);
            }
            else{
                setHistory([]);
                console.log('Found no file')
            }
        } catch (error) {
            console.log(error);
            setHistory([]);
        }
    }

    async function updateHistory(newValue:Array<History>){
        setHistory(newValue);
        try {
            await AsyncStorage.setItem('@history', JSON.stringify(newValue));
            console.log('Added '+JSON.stringify(newValue))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        initHistory();
    }, [])


    return(
        <HistoryContext.Provider value={history}>
            <HistoryUpdateContext.Provider value={updateHistory}>
                {children}
            </HistoryUpdateContext.Provider>
        </HistoryContext.Provider>
        
    )
}
type History = {
    id:number,
    date:Date,
    groupName:string,
    invoiceSummary:Array<calculationResult>
}
type calculationResult = {
    personName:string,
    personPaying:number,
    itemsBought:Array<InvoiceItem>
}
type InvoiceItem = {
    id:number,
    itemName:string,
    itemPrice:number,
    debters:Array<string>
}
