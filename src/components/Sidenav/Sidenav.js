import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const Sidenav = (props) => {
  const [showNav, setShowNav] = useState();
  return (
    <div>
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title="Noticia"
        items={[props.news, 'services', 'about', 'contact']}
        titleStyle={{ backgroundColor: '#4CAF50' }}
        itemStyle={{ backgroundColor: '#fff' }}
        itemHoverStyle={{ backgroundColor: '#CDDC39' }}
        openFromRight={true}
      />
    </div>
  );
};

export default Sidenav;