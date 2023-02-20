import { Box, Skeleton } from '@mui/material';
import React, { FC } from 'react';

const NewsSkeleton: FC = () => {
  return (
    <Box component="ul" display="flex" gap="30px" flexWrap="wrap">
      <Skeleton
        sx={{ bgcolor: '#b2b2b2' }}
        variant="rectangular"
        width="calc((100% - 2 * 30px) / 3)"
        height={200}
      />
      <Skeleton
        sx={{ bgcolor: '#b2b2b2' }}
        variant="rectangular"
        width="calc((100% - 2 * 30px) / 3)"
        height={200}
      />
      <Skeleton
        sx={{ bgcolor: '#b2b2b2' }}
        variant="rectangular"
        width="calc((100% - 2 * 30px) / 3)"
        height={200}
      />
    </Box>
  );
};

export default NewsSkeleton;
