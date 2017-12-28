import * as React from 'react';


export interface IHelloProps {
    compiler: string;
    framework: string;
}



export const Hello = (props: IHelloProps) => {
    const { compiler, framework } = props;

    return (
        <h1>Hell from { compiler } and { framework }</h1>
    );
};
