import gql from "graphql-tag";

export const helloWorldQuery = gql`
{
    hello(name: "World")
}`;