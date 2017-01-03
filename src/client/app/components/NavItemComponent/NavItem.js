import React,{ Component } from 'react';
import { Link, IndexLink } from 'react-router';

class NavItem extends Component {
  render() {
    const { router } = this.context;
    const { index, to, children } = this.props;
    let isActive = router.isActive(to, true);
    const LinkComponent = index ? Link : IndexLink;

    return (
      <li className={isActive ? 'active' : ''}>
        <LinkComponent {...this.props}>
          { children }
        </LinkComponent>
      </li>
    )
  }
}

NavItem.contextTypes = {
    router: React.PropTypes.object
};

export default NavItem;
