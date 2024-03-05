import {
  Card,
  CardContent
} from "@/components/ui/card";
import NavContent from "./NavContent";

function NavBar() {
  return(
    <Card className="rounded-*">
      <CardContent className="p-2">
        <NavContent></NavContent>
      </CardContent>
    </Card>
  );
}

export default NavBar