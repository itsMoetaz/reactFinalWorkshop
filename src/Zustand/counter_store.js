import {create} from 'zustand'

const useCounterStore= create((set) => ({
    count :0,
    addOne:()=> {
        set(
            (oldstate) =>(
        {count : oldstate.count+1

        }))},
   decerement : ()=> {
    set((oldstate)=> ({count:oldstate.count-1 }))
    },
    reset:()=> {set({count:0});}

}))

export default useCounterStore;