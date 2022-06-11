import * as React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function SimpleBadge() {
  return (
    <Badge style={{margin: "10px"}} badgeContent={4} color="primary">
      <NotificationsIcon  color="action" />
    </Badge>
  );
}
