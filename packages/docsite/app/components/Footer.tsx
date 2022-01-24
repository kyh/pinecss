import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { Link } from "remix";

type Props = {
  next?: {
    to: string;
    label: string;
  };
  prev?: {
    to: string;
    label: string;
  };
};

export const Footer = ({ next, prev }: Props) => {
  return (
    <footer className="flex items-center justify-between border-t border-green-900 border-opacity-30 p-8 mt-auto">
      {prev ? (
        <Link
          to={prev.to}
          className="flex items-center space-x-2 hover:text-white hover:underline"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>{prev.label}</span>
        </Link>
      ) : (
        <div />
      )}
      {next && (
        <Link
          to={next.to}
          className="flex items-center space-x-2 hover:text-white hover:underline"
        >
          <span>{next.label}</span>
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      )}
    </footer>
  );
};
