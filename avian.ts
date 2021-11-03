export const idiot = <T>(t: T) => t;
export const identity = idiot;

export const kestrel = <T>(t: T) => () => t;
export const K = kestrel;