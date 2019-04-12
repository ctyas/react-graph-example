/**
 * Defines the React 16 Adapter for Enzyme.
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @link https://medium.com/@mateuszsokola/configuring-react-16-jest-enzyme-typescript-7122e1a1e6e8
 */
const enzyme = require("enzyme")
const Adapter = require("enzyme-adapter-react-16")

enzyme.configure({ adapter: new Adapter() })
