import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {ApplicationBar} from "./ApplicationBar";

storiesOf('ApplicationBar', module)
  .add('ApplicationBar default view', () => {
    return <ApplicationBar/>
  })