import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld, HelloWorldRenderer } from './HelloWorld';
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';
import { helloWorldQuery } from './helloWorld.query';
import { shallow } from "enzyme";

const mocks: MockedResponse[] = [
    {
        request: {
            query: helloWorldQuery,
            variables: {
                name: "World",
            }
        },
        result: {
            data: {
                hello: "Hello World!"
            }
        }
    }
]

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MockedProvider mocks={mocks} addTypename={false}><HelloWorld /></MockedProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("renders loading", () => {
    const wrapper = shallow(<HelloWorldRenderer loading={true} data={undefined}/>);
    expect(wrapper).toMatchSnapshot();
})

it("renders an error", () => {
    const wrapper = shallow(<HelloWorldRenderer loading={false} error={{message: "Error"} as any} data={undefined}/>);
    expect(wrapper).toMatchSnapshot();
})

it("renders the result", () => {
    const wrapper = shallow(<HelloWorldRenderer loading={false} data={{ hello: "Hello World!"}}/>);
    expect(wrapper).toMatchSnapshot();
})

it("Renders null for unexpected args", () => {
    const actual = HelloWorldRenderer({ loading: false, data: undefined });
    expect(actual).toBeNull();
})

