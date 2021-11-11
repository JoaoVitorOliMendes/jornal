import React from 'react';
import Sidenav from './Sidenav';

export default class SidenavComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      news
    } = this.props;

    return (
      <div>
        <Sidenav props={news} />
      </div>
    );
  }
}