import BottomNavigation, {
  navOptions,
} from "./components/common/BottomNavigation";

export default function Home() {
  return (
    <>
      <h1>nBud</h1>
      <BottomNavigation options={navOptions} />
    </>
  );
}
