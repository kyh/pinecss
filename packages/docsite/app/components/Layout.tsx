import { Fragment } from "react";
import { useMatches } from "remix";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

type Section = {
  header: string;
  navItems: React.ComponentProps<typeof Sidebar.NavItem>[];
};

const navSections: Section[] = [
  {
    header: "Getting Started",
    navItems: [
      { label: "Introduction", to: "/" },
      { label: "Installation", to: "/installation" },
      { label: "Customize", to: "/customize" },
    ],
  },
  {
    header: "Components",
    navItems: [
      {
        label: "Button",
        to: "/components/button",
      },
      {
        label: "Card",
        to: "/components/card",
      },
      {
        label: "Navigation",
        to: "/components/nav",
      },
    ],
  },
  {
    header: "Examples",
    navItems: [
      {
        label: "Landing Page",
        to: "/example/landing-page",
      },
      {
        label: "Login Page",
        to: "/example/login",
      },
      {
        label: "TODO App",
        to: "/example/todo",
      },
    ],
  },
  {
    header: "Community",
    navItems: [
      {
        label: "Github",
        to: "https://github.com/kyh/pinecss",
      },
      {
        label: "Discord",
        to: "https://discord.gg/YtafKzR",
      },
    ],
  },
];

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const matches = useMatches();

  const flatNavItems = navSections.flatMap((section) => section.navItems);
  const activeNavIndex = flatNavItems.findIndex(
    (item) => matches[matches.length - 1].pathname === item.to
  );
  const prev =
    activeNavIndex > 0 ? flatNavItems[activeNavIndex - 1] : undefined;
  const next =
    activeNavIndex < flatNavItems.length - 1
      ? flatNavItems[activeNavIndex + 1]
      : undefined;

  const navItems = navSections.map(({ header, navItems }) => (
    <Fragment key={header}>
      <Sidebar.NavHeader>{header}</Sidebar.NavHeader>
      {navItems.map((props) => (
        <Sidebar.NavItem key={props.to} {...props} />
      ))}
    </Fragment>
  ));

  return (
    <>
      <Sidebar>{navItems}</Sidebar>
      <div className="flex flex-col flex-1">
        <section className="px-8 py-4 md:pt-16 md:pb-8">
          <main className="flex flex-col-reverse mx-auto max-w-3xl md:flex-row">
            {children}
          </main>
        </section>
        <Footer prev={prev} next={next} />
      </div>
    </>
  );
};
