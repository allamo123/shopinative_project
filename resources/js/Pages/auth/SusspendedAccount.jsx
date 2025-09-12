import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Logo } from '../../components/shared/Logo/Logo';
import { Box } from '@material-ui/core';
import { usePage } from '@inertiajs/inertia-react';
import LanguageSwitch from '../../components/shared/LangSwitch/LanguageSwitch';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectedDirection, setLangDirection } from '../../store/slices/langSlice';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { CacheProvider } from '@emotion/react';

const SusspendedAccount = () => {

  const dispatch = useDispatch();

  const { auth: { user} } = usePage().props;

  const { t } = useTranslation();

  const direction = useSelector(selectedDirection);

    const cacheLtr = createCache({
        key: "muiltr"
    });

    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, stylisRTLPlugin]
    });


    useEffect(() => {

        const handleChange = (e) => {

            if (e.type === 'language') {
                dispatch(setLangDirection(e.target.localStorage.lang === 'ar' ? 'rtl' : 'ltr'));
            }
        }

        window.addEventListener('language', handleChange);

        return () => {
            window.removeEventListener('language', handleChange);
        };
    }, []);

    useLayoutEffect(() => {
        document.body.setAttribute('dir', direction);
    }, [direction]);

  return (
    <CacheProvider value={direction === 'rtl' ? cacheRtl : cacheLtr}>

        <Box py={1} sx={{textAlign: 'right'}}>
          <LanguageSwitch />
        </Box>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh', justifyContent: 'center' }}
        >
          <Grid item>
            <Paper elevation={3} style={{ padding: 20, maxWidth: 607, minHeight:260, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item mb={4}>
                  <Logo size={300} logo="logo.svg" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" justifyContent="center" align="center" gutterBottom style={{textTransform: 'capitalize'}}>
                  {t('welcome.Dear')}, {`${user.fname} ${user.lname}`}
                  </Typography>
                  <Box mb={4}>
                    <Typography variant="h6" align="center">
                    {t('welcome.Your Account is Disabled')}
                    </Typography>
                  </Box>
                  <Typography variant="body1" align="center">
                    {t('welcome.Please contact customer support')}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
    </CacheProvider>
  );
};

export default SusspendedAccount;
