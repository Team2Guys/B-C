import React, { ReactNode } from 'react';
import { Drawer } from 'antd';

interface SheetProps {
  children?: ReactNode;
  drawerName: any;
  title?: string;
}

const Sheet: React.FC<SheetProps> = ({ children, drawerName, title }) => {
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
        {children}
      </Drawer>
    </>
  );
};

export default Sheet;
