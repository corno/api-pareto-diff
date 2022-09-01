import * as pt from "pareto-core-types"

// import { Change } from "./types/Change";
// import { LinesOptions } from "./types/LinesOptions";

// export type DiffLines_Data = {

//     originalString: string,
//     newString: string,
//     options?: LinesOptions
//     newline: string
// }

// export type DiffLines = (
//     $: DiffLines_Data
// ) => pt.Array<Change>

export type TMultilinePart = {
    readonly "startLineInOriginal": number,
    readonly "startLineInChanged": number,
    readonly "lines": pt.Array<string>,
    readonly "type":
    | ["removed", {}]
    | ["added", {}]
}

export type DiffData_Data = {
    originalData: string,
    changedData: string,
    newline: string,
}

export type DiffData = (
    $: DiffData_Data
) => null | pt.Array<TMultilinePart>

export type StringsAreEqual = (
    $: {
        a: string
        b: string
    }
) => boolean