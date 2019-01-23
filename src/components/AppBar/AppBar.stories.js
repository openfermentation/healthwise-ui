import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

import AppBar from './index'

const styles = {
  container: {
    padding: 0,
  },
  barItem: {
    marginLeft: -4,
    marginRight: 16,
  },
  flex: {
    flexGrow: 1,
  },
  foobar: { marginRight: '8px' },
}

storiesOf('Components/AppBar', module)
  .addWithInfo(
    'with a title',
    `Demonstrates default rendering of AppBar component with a title`,
    () => (
      <div>
        <div style={styles.container}>
          <AppBar>
            <Typography variant="title" color="inherit">
              Healthwise Test
            </Typography>
          </AppBar>
        </div>
      </div>
    )
  )
  .addWithInfo(
    'with a menu',
    `Demonstrates an AppBar component with a title and menu component`,
    () => (
      <div>
        <div style={styles.container}>
          <AppBar>
            <IconButton style={styles.barItem} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Healthwise Test
            </Typography>
          </AppBar>
        </div>
      </div>
    )
  )
  .addWithInfo(
    'with a menu and secondary content',
    `Demonstrates an AppBar component with a menu, title, and secondary content`,
    () => (
      <div>
        <div style={styles.container}>
          <AppBar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.flex}>
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </AppBar>
        </div>
      </div>
    )
  )
