import * as React from 'react';
import Badge from '@mui/material/Badge';
import MessageIcon from '@mui/icons-material/Message';

export default function SimpleBadge() {
  return (
    <Badge style={{margin: "10px"}} badgeContent={9} color="primary">
      <MessageIcon color="action" />
    </Badge>
  );
}
