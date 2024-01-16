export default function ExpenseLayout(props: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
