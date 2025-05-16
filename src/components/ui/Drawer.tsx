import React from 'react';
import { Drawer as AntDrawer } from 'antd';

interface SheetProps {
  children?: React.ReactNode;
  drawerName: React.ReactNode;
  title?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedLabel?: string;
  setSelectedLabel?: (label: string | undefined) => void;
  mobileBgColor?: string;
  className?: string;
}

const Sheet: React.FC<SheetProps> = ({
  children,
  drawerName,
  title,
  open,
  setOpen,
  selectedLabel,
  setSelectedLabel,
  mobileBgColor,
  className
}) => {
  const handleClose = () => {
    setOpen(false);
    setSelectedLabel?.(undefined);
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{drawerName}</div>
      <AntDrawer
        closable={false}
        destroyOnClose
        title={title}
        placement="right"
        open={open}
        onClose={handleClose}
        className={className}
        style={{ backgroundColor: mobileBgColor }}
      >
        {selectedLabel ? (
          <div>{children}</div>
        ) : (
          <div>
            {React.Children.map(children, (child: any) =>
              React.isValidElement(child) as any && child.props.label === selectedLabel
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
