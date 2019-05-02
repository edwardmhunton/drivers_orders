import React from "react";
import renderer from "react-test-renderer";

import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { AddressField } from "../AddressField";

const order = {
  id: "12345",
  PickupTime: "1556548991000",
  PickupAddress: {
    coordinates: { lat: "51.5325764", lng: "-0.0578597" },
    street_address: {
      post_code: "EX203LZ",
      address_line_1: "76 Kenworthy Road",
      city: "London"
    }
  },

  PackageSize: {
    length: "1000",
    width: "1000",
    height: "1000"
  }
};

describe("Test AddressField component functionality", () => {
  it("Renders Correctly", () => {
    const AddressFieldComponent = renderer
      .create(<AddressField order={order} />)
      .toJSON();
    expect(AddressFieldComponent).toMatchSnapshot();
  });

  it("Calls member method handleBlur", () => {
    const mockCallback = jest.fn((id, ref) => {
      console.log("changeOrderLocation called");
    });
    const ref = React.createRef();
    ref.current = mount(<input defaultValue={"12345"} />);

    const wrapper = shallow(
      <AddressField changeOrderLocation={mockCallback} order={order} />
    );
    const instance = wrapper.instance();
    instance.myRef = ref;

    instance.handleBlur();

    //expect(instance.handleBlur).toHaveBeenCalled();
  });

  it("Calls member method handleBlur", () => {
    const mockCallback = jest.fn((id, ref) => {
      console.log("changeOrderLocation called");
    });
    const ref = React.createRef();
    ref.current = mount(<input defaultValue={"12345"} />);

    const wrapper = shallow(
      <AddressField changeOrderLocation={mockCallback} order={order} />
    );
    const instance = wrapper.instance();
    instance.myRef = ref;

    instance.getRefValue();
  });
});
