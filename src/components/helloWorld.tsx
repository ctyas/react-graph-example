import { useQuery,  } from "@apollo/react-hooks";
import { helloWorldQuery } from "./helloWorld.query";
import * as React from "react";
import { QueryResult } from "@apollo/react-common";

interface Result {
    hello: string
}

export const HelloWorldRenderer = ({ loading, error, data }: Pick<QueryResult<Result>, "loading" | "error" | "data">) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data) return <div>
        <p>{data.hello}</p>
    </div>

    return null;
}

export const HelloWorld = () => {
    const result = useQuery<Result>(helloWorldQuery);
    return <HelloWorldRenderer {...result} />;
}