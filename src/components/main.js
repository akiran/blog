const React = require("react");
const { blockFor } = require('../lib/util');

const dom = React.DOM;

module.exports = React.createClass({
  displayName: "exports",
  render: function () {
    return dom.main(
      this.props,
      blockFor('before-content', this.props.children),
      dom.div({ className: "main-wrapper" },
              this.props.children)
    );
  }
});
