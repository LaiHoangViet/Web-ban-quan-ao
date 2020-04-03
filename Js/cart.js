class Quantity extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 1 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => {
      value: ++prevState.value;
    });
  }

  decrement() {
    this.setState(prevState => {
      value: prevState.value > 0 ? --prevState.value : 0;
    });
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("p", null, "Set the quantity"),
      React.createElement("div", { className: "quantity-input" },
      React.createElement("button", {
        className: "quantity-input__modifier quantity-input__modifier--left",
        onClick: this.decrement }, "\u2014"),



      React.createElement("input", {
        className: "quantity-input__screen",
        type: "text",
        value: this.state.value,
        readonly: true }),

      React.createElement("button", {
        className: "quantity-input__modifier quantity-input__modifier--right",
        onClick: this.increment }, "\uFF0B"))));






  }}


ReactDOM.render(React.createElement(Quantity, null), document.getElementById("app"));