import React from 'react'

import AppBar from 'material-ui/AppBar'
import MUItable from './MUItable'

const MUIAppBar = () => (
  <div>
	  <AppBar
	    title="Skyrim Ultimate Guide"
	    iconClassNameRight="muidocs-icon-navigation-expand-more"
	  />
	  <MUItable />
	</div>
);

export default MUIAppBar;

