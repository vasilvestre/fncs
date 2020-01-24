import React from 'react';
import { render } from 'react-dom'
import {MDCTopAppBar} from '@material/top-app-bar'
import {MaterialIcon} from '@material-ui/icons'

export default function Navbar() {
    render()
    {
        return (
          <>
              <MDCTopAppBar
                  title='FNCS'
                  navigationIcon={<MaterialIcon
                      icon='menu'
                      onClick={() => console.log('click')}
                  />}
                  actionItems={[
                      <MaterialIcon icon='file_download' />,
                      <MaterialIcon icon='print' />,
                      <MaterialIcon icon='bookmark' />,
                  ]}
              />
          </>
        );
    }
}
