import * as React from 'react';
import Badge from '@mui/material/Badge';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function SimpleBadge() {
  return (
    <Badge style={{margin: "10px"}} badgeContent={0} color="primary">
      <ArrowDropDownIcon  color="action" />
    </Badge>
  );
}
