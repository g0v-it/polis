/** @jsx jsx */
import { Component } from 'react'
import { Box, Link, Heading, jsx } from 'theme-ui'

import emoji from 'react-easy-emoji'

class Header extends Component {
  render() {
    return (
      <Box sx={{ mt: [3, null, 4] }}>
        <Heading
          as="h3"
          sx={{ fontSize: [4], lineHeight: 'body', my: [2, null, 3] }}>
          Legal
        </Heading>
        <Box sx={{ mb: [2, null, 3], maxWidth: '30em' }}>
          <Link href="https://copernicani.it/">Copernicani</Link> test edition of Polis hosted in Europe.  Do not use in production.{' '}
          Polis is built for the public with {emoji('❤️')} in Seattle{' '}
          {emoji('🇺🇸')}, with contributions from around the {emoji('🌍🌏🌎')}
        </Box>
        <Box sx={{ mb: [2, null, 3] }}>
          © {new Date().getFullYear()} The Authors <Link href="tos">TOS</Link>{' '}
          <Link href="privacy">Privacy</Link>
        </Box>
      </Box>
    )
  }
}

export default Header
