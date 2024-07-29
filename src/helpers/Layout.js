// Layout.js
import React from 'react';
import withRouter from './Router'
import Navbar from '../Navbar';

class Layout extends React.Component {
  render() {
    const { router, children } = this.props;
    console.log(this.props,"</Layout>")
    const hideNavbarRoutes = ['/', '/Home']; // Routes where Navbar should be hidden

    return (
      <>
        {!hideNavbarRoutes.includes(router.location.pathname) && <Navbar />}
        {children}
      </>
    );
  }
}

export default withRouter(Layout);
