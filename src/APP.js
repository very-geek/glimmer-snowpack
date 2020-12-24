import Component, { hbs } from "@glimmerx/component";

export default class Application extends Component {
  static template = hbs`
    <h1>Welcome to glimmer.js, built with snowpack, yay!</h1>
  `;
}
