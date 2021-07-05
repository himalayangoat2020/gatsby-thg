/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui";
import logo from '../../../../public/logo.svg';

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <img width="30" height="30" src="/half-logo.png" alt="THG Logo" />
        {` `}
        <Link
          aria-label="Link to traditional website"
          sx={{ ml: 2 }}
          href="https://thgaf.com/v1"
        >
          The Himalayan Goat Pvt. Ltd.
        </Link>
        
        {` `}
       {/*  <Link aria-label="Link to traditional website" href="https://thgaf.com/v1">
          Goat Pvt. Ltd.
        </Link> */}        
      </Flex>
    </Box>
  )
}

export default Footer
