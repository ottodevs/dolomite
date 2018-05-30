
export default class Override {
  static add(override) {
    if (window.overrides == null) window.overrides = [];
    window.overrides.push(override);
  }

  static getOverrides() {
    const overrides = {};
    for (let i = 0; i < window.overrides.length; i += 1) {
      const override = window.overrides[i];
      overrides[override.name] = override.styles;
    }
    return overrides;
  }

  static getProps() {
    const props = {};
    for (let i = 0; i < window.overrides.length; i += 1) {
      const override = window.overrides[i];
      props[override.name] = override.props;
    }
    return props;
  }

  constructor(name, styles, props) {
    this.name = name;
    this.styles = styles;
    this.props = props;
  }
}
