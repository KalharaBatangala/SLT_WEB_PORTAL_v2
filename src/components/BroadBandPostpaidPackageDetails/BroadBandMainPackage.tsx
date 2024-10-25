import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchLTEPrepaidMainPackages } from '../../services/fetchLTEPrepaidMainPackages';

const BroadBandMainPackage: React.FC = () => {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPackages = async () => {
      setLoading(true);
      try {
        const data = await fetchLTEPrepaidMainPackages();
        setPackages(data);
      } catch (error) {
        setError('Failed to fetch packages');
      } finally {
        setLoading(false);
      }
    };

    getPackages();
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading packages...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
   
      <Grid container spacing={3}>
        {packages.map((pkg) => (
          <Grid item key={pkg.OFFERING_ID} xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#0A3D75', color: 'white', borderRadius: '10px' }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {pkg.MYSLT_PKG_NAME}
                </Typography>
                <Typography variant="body1">
                  Data Volume: <strong>{pkg.DATA_VOLUME_GB} GB</strong>
                </Typography>
                <Typography variant="h5" sx={{ my: 2 }}>
                  Price: LKR {pkg.PRICE_LKR_WITH_TAX}
                </Typography>
                <Typography variant="body2">
                  Validity: <strong>{pkg.VALIDITY} Days</strong>
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: '#00C6D7', color: 'white', borderRadius: '25px' }}
                  fullWidth
                >
                  Select Package
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BroadBandMainPackage;
