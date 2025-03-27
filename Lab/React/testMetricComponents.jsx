const Page = () => {
  const { context } = useAppContext();
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
    context.setUnit(undefined);
  };

  return (
    <div>
      <Drawer open={open} onClose={onClose} unit={context.setUnit} />
    </div>
  );
};
