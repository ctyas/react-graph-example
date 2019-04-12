import { Query, QueryResult } from "react-apollo";
import { helloWorldQuery } from "./helloWorld.query";
import * as React from "react";

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

export const HelloWorld = () => (
    <Query<Result> query={helloWorldQuery}>
        {HelloWorldRenderer}
    </Query>
)