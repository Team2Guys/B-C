// components/ui/Drawer.tsx
import React from 'react';
import { Drawer as AntDrawer } from 'antd';

interface SheetProps {
  children?: React.ReactNode;
  drawerName: React.ReactNode;
  title?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedLabel?: string; // Add this to manage the currently selected label
  setSelectedLabel?: (label: string | undefined) => void; // Add this to update the selected label
}

const Sheet: React.FC<SheetProps> = ({
  children,
  drawerName,
  title,
  open,
  setOpen,
  selectedLabel,
  setSelectedLabel,
}) => {
  const handleClose = () => {
    setOpen(false);
    setSelectedLabel?.(undefined);
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{drawerName}</div>
      <AntDrawer
        closable
        destroyOnClose
        title={title}
        placement="right"
        open={open}
        onClose={handleClose}
      >
        {selectedLabel ? (
          <div>{children}</div>
        ) : (
          <div>
            {React.Children.map(children, (child) =>
              React.isValidElement(child) && child.props.label === selectedLabel
                ? child
                : null,
            )}
          </div>
        )}
      </AntDrawer>
    </>
  );
};

export default Sheet;
