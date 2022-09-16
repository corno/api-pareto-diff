import * as pt from "pareto-core-types"
import { TDiffData_Data, TMultilinePart } from "../types/x.p"


export type FDiffData = (
    $: TDiffData_Data
) => null | pt.Array<TMultilinePart>

export type FStringsAreEqual = (
    $: {
        readonly  a: string
        readonly  b: string
    }
) => boolean