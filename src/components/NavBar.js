/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from 'react';
import '../App.css';
import { Box, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Auth } from 'aws-amplify';



const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}>
          <img 
            src="/amplify-hackathon.jpg" 
            alt="logo" 
            className="logo"
            style={{
              width: '100%',
              maxHeight: '50px',
              objectFit: 'contain',
              marginBottom: '10px'
            }}
          />
          <Typography className="navBarTitle">
            AI Powered Amplify App
          </Typography>
        </Box>

        {/* Right side - logout button */}
        <Box sx={{ width: '100px', textAlign: 'right' }}>
          <Button 
            color="inherit" 
            onClick={async () => {
              try {
                await Auth.signOut();
              } catch (error) {
                console.log('error signing out:', error);
              }
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
