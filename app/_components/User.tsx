import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function User() {
  return (
    <div className="flex items-center justify-center ">
      <SignedIn>
        <div className="text-center">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="text-center">
          <SignInButton>
            <Button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              Sign In
            </Button>
          </SignInButton>
        </div>
      </SignedOut>
    </div>
  );
}

export default User;
