
export interface Change {
    count?: number | undefined;
    /**
     * Text content.
     */
    value: string;
    /**
     * `true` if the value was inserted into the new string.
     */
    added?: boolean | undefined;
    /**
     * `true` if the value was removed from the old string.
     */
    removed?: boolean | undefined;
}