import React from 'react';
export declare function createRefPolyfill<T>(): React.RefObject<T> | {
    (instance: T | null): void;
    current?: T | null | undefined;
};
