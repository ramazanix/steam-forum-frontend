import Link from "next/link";
import { LogoIcon } from "@/icons";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    router.push(`http://localhost:8000/auth/login`);
  };

  return (
    <header className="bg-first fixed mt-4 flex w-[90%] items-stretch gap-24 self-center rounded-[20px] bg-header/80 pl-16 pr-8 text-white backdrop-blur-sm">
      <Link href="/" className="self-center">
        <LogoIcon width={80} height={80} />
      </Link>
      <nav className="flex grow items-center gap-x-24 text-nowrap text-xl font-bold tracking-wider">
        <Link href="/" className="transition-colors hover:text-accent_2">
          My inventory
        </Link>
        <Link href="/" className="transition-colors hover:text-accent_2">
          Trade
        </Link>
        <Link href="/" className="transition-colors hover:text-accent_2">
          Community
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Button
              rounded="full"
              size="xl"
              className="tracking-wider hover:-rotate-2"
              onClick={() => {
                router.push("/profile");
              }}
            >
              Profile
            </Button>

            <Button
              rounded="full"
              size="xl"
              className="tracking-wider hover:-rotate-2"
              onClick={logout}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            rounded="full"
            size="xl"
            className="tracking-wider"
            onClick={handleLogin}
          >
            Login
          </Button>
        )}
      </div>
    </header>
  );
};
