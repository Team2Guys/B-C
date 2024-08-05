import React, { Children, useState } from 'react';
import { Button, Drawer } from 'antd';

interface SheetProps {
  Children: any;
  drawerName: string;
  title: string;
}

const Sheet: React.FC<SheetProps> = ({ Children, drawerName, title }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div onClick={showLoading}>{drawerName}</div>
      <Drawer
        closable
        destroyOnClose
        title={title}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        {Children}
      </Drawer>
    </>
  );
};

export default Sheet;
