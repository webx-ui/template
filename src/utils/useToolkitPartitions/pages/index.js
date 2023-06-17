import {
    useReducer
} from "react"

import {
    usePartition
} from "@web-cross-ui/toolkit"

import { 
    Reducer as PagesReducer, 
    state as pages
} from "./reducer"

import { 
    Partition as PagesPartition
} from "./partition"

export default function usePagesAPI () {
    const [
        state, dispatch
    ] = useReducer(PagesReducer, pages)

    usePartition(
        "pages", 
        new PagesPartition(
            state, dispatch,
            useToolKit()
        )
    )
    
}