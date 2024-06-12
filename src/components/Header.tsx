import Link from "next/link";
import { LogoIcon } from "@/icons";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useStore } from "@/hooks/useStore";
import Cookies from "js-cookie";
import { observer } from "mobx-react";

export const Header: React.FC = observer(() => {
  const router = useRouter();
  const {
    userStore: { isLoading, isLoggedIn, clearStore },
  } = useStore();

  const handleLogin = () => {
    router.push(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`);
  };

  const handleLogout = () => {
    clearStore();
    Cookies.remove("accessToken");
    router.refresh();
  };

  return (
    <>
      {!isLoading ? (
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
            {isLoggedIn ? (
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
                  onClick={handleLogout}
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
      ) : null}
    </>
  );
});
