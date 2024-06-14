import Link from "next/link";
import { LogoIcon } from "@/icons";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    router.push(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`);
  };

  return (
    <header className="fixed flex w-full items-stretch gap-24 border-b-2 border-first bg-white pl-16 pr-8">
      <Link href="/" className="self-center">
        <LogoIcon width={80} height={80} />
      </Link>
      <nav className="flex grow items-center gap-x-24 text-nowrap text-xl font-bold tracking-wider text-gray-700">
        <Link href="/" className="transition-colors hover:text-second">
          My inventory
        </Link>
        <Link href="/" className="transition-colors hover:text-second">
          Trade
        </Link>
        <Link href="/" className="transition-colors hover:text-second">
          Community
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Button
              rounded="full"
              size="xl"
              className="tracking-wider"
              onClick={() => {
                router.push("/profile");
              }}
            >
              Profile
            </Button>

            <Button
              rounded="full"
              size="xl"
              className="tracking-wider"
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
