import PropTypes from 'prop-types';
import { useState, cloneElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// project-imports
import { APP_DEFAULT_PATH, ThemeDirection } from 'config';
import IconButton from 'components/@extended/IconButton';
import Logo from 'components/logo';
import { handlerComponentDrawer, useGetMenuMaster } from 'api/menu';

// assets
import { DocumentDownload, ExportSquare, HambergerMenu, Minus } from 'iconsax-react';

// elevation scroll
function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window : undefined
  });

  return cloneElement(children, {
    style: {
      boxShadow: trigger ? '0 8px 6px -10px rgba(0, 0, 0, 0.5)' : 'none',
      backgroundColor: trigger ? alpha(theme.palette.background.default, 0.8) : alpha(theme.palette.background.default, 0.1)
    }
  });
}

// ==============================|| COMPONENTS - APP BAR ||============================== //

export default function Header({ layout = 'landing', ...others }) {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerToggle, setDrawerToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const { menuMaster } = useGetMenuMaster();

  const menuItemStyles = {
    fontFamily: 'timesnewroman', // Example: 'Arial, sans-serif'
    fontSize: '16', // Adjust the size as needed
    fontWeight: '600', // Adjust the weight as needed (e.g., 'normal', 400)
  };

  /** Method called on multiple components with different event types */
  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  let url;
  let value = window.location.search;
  const params = new URLSearchParams(value);
  const ispValue = params.get('isp');

  return (
    <ElevationScroll layout={layout} {...others}>
      <AppBar
        sx={{
          bgcolor: alpha(theme.palette.background.default, 2.9),
          backdropFilter: 'blur(8px)',
          color: theme.palette.text.primary,
          boxShadow: 'none'
        }}
      >
        <Container maxWidth="xl" disableGutters={matchDownMd}>
          <Toolbar sx={{ px: { xs: 1.5, sm: 4, md: 0, lg: 0 }, py: 1 }}>
            <Stack direction="row" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} alignItems="center">
              <Typography sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo to="/" />
              </Typography>
              <Chip
                label={import.meta.env.VITE_APP_VERSION}
                variant="outlined"
                size="small"
                color="secondary"
                sx={{ mt: 0.5, ml: 1, fontSize: '0.725rem', height: 20, '& .MuiChip-label': { px: 0.5 } }}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={3} // Adjust spacing as needed
              sx={{
                alignItems: 'center',
                display: { xs: 'none', md: 'flex' }, // Changed 'block' to 'flex' to align items horizontally
                '& .header-link': { fontWeight: 700, '&:hover': { color: 'lightblue' }, color: 'blue', fontSize: 18, fontFamily: 'timesnewroman' },
              }}
            >
              <Link
                className="header-link"
                sx={{ ml: theme.direction === ThemeDirection.RTL ? 3 : 0 }}
                color="secondary.main"
                component={RouterLink}
                to="/landing"
                target=""
                underline="none"
              >
                Home
              </Link>
              <Link
                className="header-link"
                color="secondary.main"
                component={RouterLink}
                to="/about-us"
                underline="none"
              >
                About Us
              </Link>

              {/* Articles Link with Dropdown */}
              <Box
                onMouseEnter={handleMenuOpen}
                onMouseLeave={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    handleMenuClose();
                  }
                }}
              >
                <Button
                  aria-controls={isMenuOpen ? 'articles-menu' : undefined}
                  aria-haspopup="true"
                  color="inherit"
                  className="header-link"
                  sx={{ 
                    color: theme.palette.secondary.main, 
                    textTransform: 'none',
                    fontFamily: 'timesnewroman', // Example: 'Arial, sans-serif'
                    fontSize: '18', // Adjust the size as needed
                    fontWeight: 'bold', // Adjust the weight as needed (e.g., 'bold', 500)
                  }}
                >
                  Offerings
                </Button>
                <Menu
                  id="articles-menu"
                  anchorEl={anchorEl}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                  sx={{ mt: 1 }}  // Adjusting the position of the menu
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  MenuListProps={{
                    onMouseLeave: (event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        handleMenuClose();
                      }
                    },
                  }}
                >
                  <MenuItem onClick={handleMenuClose} component={RouterLink} to="/Articles" sx={menuItemStyles}>
                    Articlels
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose} component={RouterLink} to="/Resources" sx={menuItemStyles}>
                    Resources
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose} component={RouterLink} to="/Foundation" sx={menuItemStyles}>
                    Foundation
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose} component={RouterLink} to="/Traning" sx={menuItemStyles}>
                    Training
                  </MenuItem>
                </Menu>
              </Box>

              <Link
                className="header-link"
                color="secondary.main"
                component={RouterLink}
                to="/contact-us"
                underline="none"
              >
                Contact Us
              </Link>       
            </Stack>
            <Box
              sx={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <Typography sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo to="/" />
              </Typography>
              <Stack direction="row" spacing={2}>
                {layout === 'component' && (
                  <Button variant="outlined" color="warning" component={RouterLink} to={APP_DEFAULT_PATH} sx={{ mt: 0.25 }}>
                    Dashboard
                  </Button>
                )}
                {layout !== 'component' && (
                  <Button variant="outlined" color="warning" component={RouterLink} to="/components-overview/buttons" sx={{ mt: 0.25 }}>
                    All Components
                  </Button>
                )}

                <IconButton
                  size="large"
                  color="secondary"
                  {...(layout === 'component'
                    ? { onClick: () => handlerComponentDrawer(!menuMaster.isComponentDrawerOpened) }
                    : { onClick: drawerToggler(true) })}
                  sx={{ p: 1 }}
                >
                  <HambergerMenu />
                </IconButton>
              </Stack>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
                sx={{ '& .MuiDrawer-paper': { backgroundImage: 'none' } }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    '& .MuiListItemIcon-root': {
                      fontSize: '1rem',
                      minWidth: 32
                    }
                  }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <List>
                    <Link style={{ textDecoration: 'none' }} href="/login" target="_blank">
                      <ListItemButton>
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} component={RouterLink} to="/components-overview/buttons" target="_blank">
                      <ListItemButton>
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="All Components" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template"
                      target="_blank"
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="Free Version" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="https://phoenixcoded.gitbook.io/able-pro/v/react/" target="_blank">
                      <ListItemButton>
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="Documentation" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="https://phoenixcoded.authordesk.app/" target="_blank">
                      <ListItemButton>
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="Support" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="https://1.envato.market/c/1289604/275988/4415?subId1=phoenixcoded&u=https%3A%2F%2Fthemeforest.net%2Fitem%2Fable-pro-responsive-bootstrap-4-admin-template%2F19300403"
                      target="_blank"
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <Minus color={theme.palette.secondary.main} />
                        </ListItemIcon>
                        <ListItemText primary="Purchase Now" primaryTypographyProps={{ variant: 'h6', color: 'secondary.main' }} />
                        <Chip color="primary" label="v1.0" size="small" />
                      </ListItemButton>
                    </Link>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}

ElevationScroll.propTypes = { layout: PropTypes.string, children: PropTypes.node, window: PropTypes.any };

Header.propTypes = { layout: PropTypes.string, others: PropTypes.any };
