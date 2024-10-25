import { Alert, Button, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchLTEPrepaidPackages } from '../../services/fetchLTEPrepaidPackages';


interface Plan {
  OFFERING_ID: string;   
  ADDON_NAME: string;    
  PRICE_LKR_WITH_TAX: number;  
  DATA_VOLUME_GB?: string; 
  VALIDITY?: number; 
}

const PlanCard = ({ plan }: { plan: Plan }) => (
  <Card sx={{ backgroundColor: '#0A3D75', color: 'white', borderRadius: '10px', width: '300px' }}>
    <CardContent>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {plan.ADDON_NAME}
      </Typography>
      <Typography variant="body1">
        Total Volume: <strong>{plan.DATA_VOLUME_GB ? `${plan.DATA_VOLUME_GB} GB` : 'N/A'}</strong>
      </Typography>
      <Typography variant="h5" sx={{ my: 2 }}>
        Price: {plan.PRICE_LKR_WITH_TAX} LKR
      </Typography>
      <Typography variant="body2">
        Validity Period: {plan.VALIDITY ? `${plan.VALIDITY} Days` : 'N/A'}
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: '#00C6D7', color: 'white', borderRadius: '25px' }}
        fullWidth
      >
        Activate
      </Button>
    </CardContent>
  </Card>
);

const PlansGrid = ({ plans }: { plans: Plan[] }) => (
  <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ padding: '20px' }}>
    {plans.map((plan) => (
      <Grid item key={plan.OFFERING_ID} xs={12} sm={6} md={4}>
        <PlanCard plan={plan} />
      </Grid>
    ))}
  </Grid>
);

const App = () => {
  const [packages, setPackages] = useState<Plan[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 3; 

  useEffect(() => {
    const getPackages = async () => {
      try {
        const data = await fetchLTEPrepaidPackages();
        setPackages(data.dataBundle.data); 
      } catch (err) {
        setError('Failed to fetch packages.');
      } finally {
        setLoading(false);
      }
    };

    getPackages();
  }, []);

 
  const lastIndex = (currentPage + 1) * itemsPerPage;

  const firstIndex = lastIndex - itemsPerPage;

  const currentPlans = packages.slice(firstIndex, lastIndex);

 
  const handleNextPage = () => {
    if (lastIndex < packages.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (firstIndex > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div style={{ backgroundColor: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <PlansGrid plans={currentPlans} />
      <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
        <Button onClick={handlePrevPage} disabled={currentPage === 0} variant="outlined" sx={{ marginRight: '10px' }}>
          &lt;
        </Button>
        <Button onClick={handleNextPage} disabled={lastIndex >= packages.length} variant="outlined">
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default App;
