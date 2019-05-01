import React from "react";

export class AddressField extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur() {
    const { changeOrderLocation, order } = this.props;
    changeOrderLocation(order.id, this.myRef.current.value);
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
