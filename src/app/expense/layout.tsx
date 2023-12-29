export default function Expense(props: {
  children: React.ReactNode;
  create: React.ReactNode;
}) {
  return (
    <main>
      {props.children}
      {props.create}
      {props.create}
    </main>
  );
}
