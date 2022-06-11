import * as React from 'react';
import Badge from '@mui/material/Badge';
import GridViewIcon from '@mui/icons-material/GridView';

export default function SimpleBadge() {
  return (
    <Badge style={{margin: "10px"}} badgeContent={0} color="primary">
      <GridViewIcon  color="action" />
    </Badge>
  );
}
