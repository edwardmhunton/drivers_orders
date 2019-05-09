import React from "react";

interface Props {
  changeOrderLocation: (a: string, b?: string) => {};
  order: {
    PackageSize: {
      width: string;
      height: string;
      length: string;
    };
    PickupTime: string;
    id: string;
    PickupAddress: {
      street_address: object;
      coordinates: { lat: string; lng: string };
    };
  };
}

interface State {}

export class AddressField extends React.Component<Props, State> {
  //state = { myRef: createRef<HTMLDivElement> };
  private myRef = React.createRef<HTMLInputElement>();
  constructor(props) {
    super(props);

    this.handleBlur = this.handleBlur.bind(this);
    this.getRefValue = this.getRefValue.bind(this);
  }

  handleBlur() {
    const { changeOrderLocation, order } = this.props;
    changeOrderLocation(order.id, this.getRefValue());
  }
  getRefValue() {
    if (this.myRef.current) {
      return this.myRef.current.value;
    }
  }
  render() {
    const { order } = this.props;
    return (
      <div>
        <p>Pickup Address (free text)</p>
        <form>
          <input
            ref={this.myRef}
            type="text"
            onBlur={this.handleBlur}
            defaultValue={
              order.PickupAddress.coordinates.lat +
              ", " +
              order.PickupAddress.coordinates.lng
            }
          />
        </form>
      </div>
    );
  }
}
