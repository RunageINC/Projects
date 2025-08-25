import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function Home() {
  const handleSomething = () => {};
  return (
    <div className="flex flex-col items-center justify-center">
      <Link to="/team/new">
        <Button>Create Team</Button>
      </Link>
      <Link to="/admin/digimon/new">
        <Button>Admin - Register New Digimon</Button>
      </Link>
      <Link to="/admin/digimon/new">
        <Button>Admin - Register New Trait</Button>
      </Link>
      <Link to="/admin/digimon/new">
        <Button>Admin - Register New Skill</Button>
      </Link>
      <Link to="/admin/digimon/new">
        <Button>Admin - Register New Passive</Button>
      </Link>
    </div>
  );
}
